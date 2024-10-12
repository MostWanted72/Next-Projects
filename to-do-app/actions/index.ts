'use server'

import prisma from "@/utills/db"
import { Task } from "@/utills/GlobalTypes";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// fetch all tasks
export const fetchAllTasks = async (): Promise<Task[]> => {
  const allTasks = await prisma.task.findMany({
    orderBy: { createdAt: 'desc' }
  })
  return allTasks;
}

// fetch one
export const fetchTask = async (id: string ): Promise<Task | undefined>  => {
  const task = await prisma.task.findUnique({
    where: { id }
  })
  if (task) {
    return task;
  }
}

interface formStateType {
  message: boolean,
  errors?: string[]
}

const createTaskSchema = z.object({
  content: z.string().min(3).regex(/^[A-Za-z ]+$/, { message: 'Must be lowercase letters or dashes without spaces'})
})

// create task
export const createTask = async (formState: formStateType, FormData: FormData): Promise<formStateType>  => {
  const content = FormData.get('content');
  const result = createTaskSchema.safeParse({ content })

  if (!result.success) {
    return { message: formState.message, errors: result.error.flatten().fieldErrors.content}
  }

  try {
    if (result.success) {
      await prisma.task.create({ data: { content: result.data.content }})
    }
  } catch (err) {
    if (err instanceof Error) {
      return { message: formState.message, errors: [err.message]}
    }
  }
  revalidatePath('/tasks')
  return { message: !formState.message, errors: [] };
}

// delete
export const deleteTask = async (id: string) => {
  await prisma.task.delete({ where: { id }})
  revalidatePath('/tasks')
}

interface updateFormStateType {
  errors?: string[]
  updateShowOpen: boolean
}

// update task
export const updateTask = async (id: string, formState: updateFormStateType, FormData: FormData): Promise<updateFormStateType> => {
  const content = FormData.get('content');
  const closeTriggered = FormData.get('close');
  const updateTriggered = FormData.get('update');
  const result = createTaskSchema.safeParse({ content })

  if (closeTriggered === 'close') {
    return { updateShowOpen: !formState.updateShowOpen, errors: [] }
  }

  if (!result.success) {
    return { updateShowOpen: formState.updateShowOpen, errors: result.error.flatten().fieldErrors.content}
  }

  if (updateTriggered === 'update') {
    try {
      if (result.success) {
        await prisma.task.update({ 
          where: { id },
          data: { content: result.data.content }
        })
      }
    } catch (err) {
      if (err instanceof Error) {
        return { errors: [err.message], updateShowOpen: formState.updateShowOpen}
      }
    }
  }
  revalidatePath('/tasks')
  return { errors: [], updateShowOpen: !formState.updateShowOpen}
}