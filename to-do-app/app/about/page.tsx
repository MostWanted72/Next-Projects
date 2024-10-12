import paths from "@/utills/paths";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-7xl">About Page</h1>
      <Link href={paths.landingPage} className="text-2xl">
        Home Page
      </Link>
    </div>
  );
}
