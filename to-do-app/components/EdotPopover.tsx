"use client";
import { updateTask } from "@/actions";
import { Task } from "@/utills/GlobalTypes";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

interface Props {
  task: Task;
}

export default function EditPopover({ task }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [formState, action] = useFormState(updateTask.bind(null, task.id), {
    errors: [],
    updateShowOpen: false,
  });

  useEffect(() => {
    setIsOpen(false);
  }, [formState.updateShowOpen]);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="btn btn-primary btn-xs"
        onClick={() => setIsOpen(!isOpen)}
      >
        Edit
      </button>

      {isOpen && (
        <div className="absolute z-10 w-96 p-3 mt-2 rounded-lg shadow-lg bg-sky-800 ">
          <form action={action}>
            <textarea
              className="font-semibold p-4 rounded min-h-50 w-full"
              defaultValue={task.content}
              name="content"
            />
            <div className="text-yellow-400 p-4">
              {formState.errors?.join(" ")}
            </div>
            <div className="flex gap-2 justify-between items-center">
              <input
                name="taskCompleted"
                type="checkbox"
                className="toggle toggle-success toggle-sm"
                defaultChecked={task.completed}
              />
              <div className="gap-2 flex">
                <button
                  type="submit"
                  name="close"
                  value="close"
                  className="mt-2 btn btn-secondary btn-xs"
                >
                  Close
                </button>
                <button
                  type="submit"
                  name="update"
                  value="update"
                  className="mt-2 btn btn-primary btn-xs"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
