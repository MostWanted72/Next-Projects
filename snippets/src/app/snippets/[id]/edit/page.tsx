interface Props {
  params: {
    id: string;
  };
}

export default function SnippetEditPage(props: Props) {
  const id = parseInt(props.params.id);

  return <div>Editing snippet id {id}</div>;
}
