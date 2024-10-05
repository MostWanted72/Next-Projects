import PostList from "@/components/posts/post-list";
import { fetchPostsBySearchTerm } from "@/db/queries/pots";
import { redirect } from "next/navigation";

interface Props {
  searchParams: { term: string };
}

export default function SearchPage(props: Props) {
  const { term } = props.searchParams;

  if (!term) {
    redirect("/");
  }

  return (
    <div>
      <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
    </div>
  );
}
