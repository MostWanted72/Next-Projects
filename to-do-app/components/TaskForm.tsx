import { createTask } from "@/actions";

export default function TaskForm() {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          className="input input-bordered join-item w-full"
          name="content"
          required
          placeholder="Enter Task"
        />
        <button className="btn btn-primary join-item" type="submit">
          create task
        </button>
      </div>
    </form>
  );
}
