import CommentShow from "@/components/comments/comment-show";
import { fetchCommentByPostId } from "@/db/queries/comments";
import { notFound } from "next/navigation";

interface Props {
  postId: string;
}

export default async function CommentList({ postId }: Props) {
  const comments = await fetchCommentByPostId(postId);
  if (!comments) {
    return notFound();
  }
  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );
  const renderedComments = topLevelComments.map((comment) => {
    return (
      <CommentShow key={comment.id} commentId={comment.id} postId={postId} />
    );
  });

  return (
    <div className="space-y-3">
      <h1 className="text-lg font-bold">All {comments.length} comments</h1>
      {renderedComments}
    </div>
  );
}
