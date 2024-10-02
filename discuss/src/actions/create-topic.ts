'use server'

import {z} from 'zod';

interface CreateTopicFormStateType {
  errors: {
    name?: string[],
    description?: string[]
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

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors}
  }

  return { errors: {}}
  // TODO: revalidate the home page
}