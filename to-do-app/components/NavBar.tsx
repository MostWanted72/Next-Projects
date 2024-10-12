import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const links = [
  { href: "/client", label: "client" },
  { href: "/drinks", label: "drinks" },
  { href: "/tasks", label: "tasks" },
  { href: "/prisma-example", label: "prisma" },
];

export default function NavBar() {
  const renderLinks = () =>
    links.map((link) => (
      <li key={link.href}>
        <Link href={link.href} className="capitalize">
          {link.label}
        </Link>
      </li>
    ));

  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Next.js
        </Link>
        <ul className="menu menu-horizontal md:ml-8">{renderLinks()}</ul>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
