'use server'

import prisma from "@/utills/db"
import { Task } from "@/utills/GlobalTypes";
import { revalidatePath } from "next/cache";

export const fetchAllTasks = async (): Promise<Task[]> => {
  const allTasks = await prisma.task.findMany({
    orderBy: { createdAt: 'desc' }
  })
  return allTasks;
}

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
}

export const createTask = async (formState: formStateType, FormData: FormData): Promise<formStateType>  => {
  const content = FormData.get('content');

  if (typeof content === 'string') {
    await prisma.task.create({ data: { content }})
    revalidatePath('/tasks')
    return { message: !formState.message };
  }
  return { message: false}
}

export const deleteTask = async (id: string) => {
  await prisma.task.delete({ where: { id }})
  console.log('check this part', process.env.NODE_ENV)
  revalidatePath('/tasks')
}