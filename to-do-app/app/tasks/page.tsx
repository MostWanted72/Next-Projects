import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

export default function TasksPage() {
  return (
    <div className="max-w-lg">
      <TaskForm />
      <TaskList />
    </div>
  );
}
