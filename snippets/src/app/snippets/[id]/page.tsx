import db from "@/db";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export default async function SnippetShowPage(props: Props) {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  if (!snippet) {
    return notFound();
  }

  return <div>{snippet.title}</div>;
}
