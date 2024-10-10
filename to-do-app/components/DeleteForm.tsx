import { deleteTask } from "@/actions";

interface Props {
  id: string;
}

export default function DeleteTask({ id }: Props) {
  return (
    <form action={deleteTask.bind(null, id)}>
      <button className="btn btn-warning btn-xs">Delete</button>
    </form>
  );
}
