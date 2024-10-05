import CommentCreateForm from "@/components/comments/comment-create-form";
import CommentList from "@/components/comments/comment-list";
import PostShow from "@/components/posts/post-show";
import { fetchCommentByPostId } from "@/db/queries/comments";
import paths from "@/path";
import Link from "next/link";

interface Props {
  params: {
    slug: string;
    postId: string;
  };
}

export default function PostShowPage(props: Props) {
  const { postId, slug } = props.params;

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {"< "}Back to {slug}
      </Link>
      <PostShow postId={postId} />
      <CommentCreateForm postId={postId} startOpen />
      <CommentList postId={postId} />
    </div>
  );
}
