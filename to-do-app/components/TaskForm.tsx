"use client";
import { createTask } from "@/actions";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

export default function TaskForm() {
  const [formState, action] = useFormState(createTask, {
    message: false,
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    setInput("");
  }, [formState.message]);

  return (
    <form action={action}>
      <div className="join w-full">
        <input
          className="input input-bordered join-item w-full"
          name="content"
          value={input}
          required
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Task"
        />
        {<div>{formState.message}</div>}
        <button className="btn btn-primary join-item" type="submit">
          create task
        </button>
      </div>
    </form>
  );
}
