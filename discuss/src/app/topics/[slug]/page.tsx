import PostList from "@/components/posts/post-list";
import PostCreateForm from "@/components/pots/post-create-form";
import { fetchPostByTopicSlug } from "@/db/queries/pots";

interface Props {
  params: {
    slug: string;
  };
}

export default function TopicShowPage({ params }: Props) {
  const { slug } = params;
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
        <PostList fetchData={() => fetchPostByTopicSlug(slug)} />
      </div>
      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
}
