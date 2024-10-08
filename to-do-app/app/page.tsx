import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-7xl-">Home Page</h1>
      <Link href="/about" className="text-2xl">
        Home Page
      </Link>
    </div>
  );
}
