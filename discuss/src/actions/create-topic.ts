'use server'

import type { Topic } from '@prisma/client'
import {z} from 'zod';
import { auth } from '@/auth';
import { db } from '@/db';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import paths from '@/path';

interface CreateTopicFormStateType {
  errors: {
    name?: string[],
    description?: string[],
    _form?: string[],
  }
}

const createTopicSchema = z.object({
  name: z.string().min(3).regex(/^[A-Za-z]+$/, { message: 'Must be lowercase letters or dashes without spaces'}),
  description: z.string().min(10),
})

export async function createTopic(formState: CreateTopicFormStateType, formData: FormData): Promise<CreateTopicFormStateType> {
  const name = formData.get('name');
  const description = formData.get('description');

  await new Promise((r) => setTimeout(r, 2500))

  const result = createTopicSchema.safeParse({
    name, description,
  })

  const session = await auth();

  if (!session || !session?.user) {
    return { errors: { _form: ['You must be signed in to do this']}}
  }

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors}
  }


  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: {
        slug: result.data?.name,
        description: result.data?.description
      }
    })
  } catch(err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message]
        }
      }
    } else {
      return {
        errors: {
          _form: ["something went wrong"]
        }
      }
    }
  }

  revalidatePath('/')
  redirect(paths.topicShow(topic.slug))
}