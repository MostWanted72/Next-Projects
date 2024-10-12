"use client";
import { createTask } from "@/actions";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

export default function TaskForm() {
  const [input, setInput] = useState("");
  const [formState, action] = useFormState(createTask, {
    message: false,
    errors: [],
  });

  useEffect(() => {
    setInput("");
  }, [formState.message]);

  return (
    <form action={action}>
      <div className="join w-full">
        <div className="flex flex-col gap-1 w-full">
          <input
            className="input input-bordered join-item w-full"
            name="content"
            value={input}
            required
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Task"
          />
          {
            <div className="text-red-500 p-4">
              {formState.errors?.join(" ")}
            </div>
          }
        </div>
        <button className="btn btn-primary join-item" type="submit">
          create task
        </button>
      </div>
    </form>
  );
}
