import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { getSession } from "@auth0/nextjs-auth0";
import paths from "@/utills/paths";

const links = [
  { href: "/client", label: "client" },
  { href: "/drinks", label: "drinks" },
  { href: "/tasks", label: "tasks" },
  { href: "/prisma-example", label: "prisma" },
];

export default async function NavBar() {
  const session = await getSession();

  const renderLinks = () =>
    links.map((link) => (
      <li key={link.href}>
        <Link href={link.href} className="capitalize">
          {link.label}
        </Link>
      </li>
    ));

  return (
    <nav className="navbar px-8 max-w-6xl mx-auto bg-base-300 py-4 flex justify-between items-center">
      <div className=" flex-col sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Next.js
        </Link>
        <ul className="menu menu-horizontal md:ml-8">{renderLinks()}</ul>
      </div>
      <div className="flex gap-4">
        <ThemeSwitcher />
        {!session ? (
          <div className="w-fit">
            <Link className="flex gap-4 btn btn-accent" href={paths.auth.login}>
              Login
            </Link>
          </div>
        ) : (
          <div>
            <div>{session.user.name}</div>
            <Link
              className="flex gap-4 btn btn-secondary"
              href={paths.auth.logout}
            >
              Log Out
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
