import db from "@/db";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export default async function SnippetShowPage(props: Props) {
  // artifical loading
  await new Promise((r) => setTimeout(r, 500));
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  if (!snippet) {
    return notFound();
  }

  return <div>{snippet.title}</div>;
}
