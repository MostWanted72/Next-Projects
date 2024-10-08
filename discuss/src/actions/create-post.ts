'use server'

import type { Post } from "@prisma/client"
import { auth } from "@/auth"
import { z } from "zod"
import { db } from "@/db"
import { revalidatePath } from "next/cache"
import paths from "@/path"
import { redirect } from "next/navigation"

interface createPostFormStateType {
  errors: {
    title?: string[],
    content?: string[],
    _form?: string[],
  }
}

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10)
})

export async function createPost(slug: string, formState: createPostFormStateType, formData: FormData): Promise<createPostFormStateType> {
  const title = formData.get('title')
  const content = formData.get('content')

  const result = createPostSchema.safeParse({ title, content})

  const session = await auth();

  if (!session || !session?.user) {
    return {
      errors: {
        _form: ['You must be signed in to do this']
      }
    }
  }

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors}
  }

  const topic = await db.topic.findFirst({ where: { slug }});

  if(!topic) {
    return { errors: { _form: ['Cannot find topic']}}
  }

  let post: Post
  try {
    post = await db.post.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        userId: session.user.id,
        topicId: topic?.id
      }
    })
  } catch(err) {
    if (err instanceof Error) {
      return {
        errors: { _form: [err.message] }
      }
    } else {
      return {
        errors: { _form: ['Failed to create post']}
      }
    }
  }

  revalidatePath(paths.topicShow(slug))
  redirect(paths.postShow(slug, post.id))
  return { errors: {}}
  //TODO: revalidate the topic show page
}