import { Task } from "@/utills/GlobalTypes";
import Link from "next/link";
import { fetchAllTasks } from "@/actions";
import DeleteTask from "./DeleteForm";

export default async function TaskList() {
  const tasks: Task[] = await fetchAllTasks();

  if (tasks.length === 0) {
    return <h1 className="mt-8 font-medium text-lg">No tasks to show...</h1>;
  }

  const renderListTask = () =>
    tasks.map((task) => (
      <li
        key={task.id}
        className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg"
      >
        <h2
          className={`text-lg capitalize ${
            task.completed ? "line-through" : null
          }`}
        >
          {task.content}
        </h2>
        <div className="flex gap-6 items-center">
          <Link href={`/tasks/${task.id}`} className="btn btn-accent btn-xs">
            Edit
          </Link>
          <DeleteTask id={task.id} />
        </div>
      </li>
    ));

  return <ul className="mt-8">{renderListTask()}</ul>;
}
