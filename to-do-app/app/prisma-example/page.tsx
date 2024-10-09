import prisma from "@/utills/db";

interface Task {
  id: string;
  content: string;
  completed: boolean;
  createdAt: Date;
}

const prismaHandler = async (): Promise<Task[]> => {
  await prisma.task.create({
    data: {
      content: "wake up",
    },
  });
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return allTasks;
};

export default async function PrismaExample() {
  const tasks = await prismaHandler();
  return (
    <div>
      <h1 className="text-7xl">Prisma Page</h1>
      {tasks.map((task) => (
        <h2 className="text-xl py-2" key={task.id}>
          {task.content}
        </h2>
      ))}
    </div>
  );
}
