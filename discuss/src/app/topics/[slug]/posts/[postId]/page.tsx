interface Props {
  params: {
    slug: string;
    postId: string;
  };
}

export default function PostShowPage(props: Props) {
  return <div>{props.params.slug}</div>;
}
