'use server'

import {z} from 'zod';
import { auth } from '@/auth';

interface CreateTopicFormStateType {
  errors: {
    name?: string[],
    description?: string[],
    _form?: string[],
  }
}

const createTopicSchema = z.object({
  name: z.string().min(3).regex(/^[a-z]_$/, { message: 'Must be lowercase letters or dashes without spaces'}),
  description: z.string().min(10),
})

export async function createTopic(formState: CreateTopicFormStateType, formData: FormData): Promise<CreateTopicFormStateType> {
  const name = formData.get('name');
  const description = formData.get('description');

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

  return { errors: {}}
  // TODO: revalidate the home page
}