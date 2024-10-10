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

export const fetchTask = async (id: string ): Promise<Task> => {
  const task = await prisma.task.findUnique({
    where: { id}
  })
  return task;
}

export const createTask = async (FormData: FormData) => {
  const content = await FormData.get('content');
  await prisma.task.create({ data: { content }})
  revalidatePath('/tasks')
}

export const deleteTask = async (id: string) => {
  await prisma.task.delete({ where: { id }})
  console.log('check this part', process.env.NODE_ENV)
  revalidatePath('/tasks')
}