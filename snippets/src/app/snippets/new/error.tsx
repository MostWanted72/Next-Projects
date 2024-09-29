"use client";

interface Props {
  error: Error;
  reset: () => void;
}

export default function ErrorCreateSnippet({ error }: Props) {
  return <div>{error.message}</div>;
}
