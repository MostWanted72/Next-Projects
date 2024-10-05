"use client";

import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { search } from "@/actions/search";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const term = searchParams.get("term") as string;

  return (
    <form action={search}>
      <Input name="term" defaultValue={term} />
    </form>
  );
}
