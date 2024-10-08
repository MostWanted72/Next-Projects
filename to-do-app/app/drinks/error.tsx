"use client";
interface Props {
  error: {
    message: string;
  };
}

export default function Error({ error }: Props) {
  console.log("check this part", error);
  if (error?.message) {
    return <div>{error?.message}</div>;
  }

  return <div>There was an error...</div>;
}
