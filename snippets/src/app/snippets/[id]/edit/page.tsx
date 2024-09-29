import db from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

interface Props {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(props: Props) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });

  if (!snippet) {
    notFound();
  }

  console.log(snippet);
  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
