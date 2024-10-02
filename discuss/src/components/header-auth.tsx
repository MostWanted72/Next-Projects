"use client";

import {
  NavbarItem,
  Avatar,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "@/actions";

export default function HeaderAuth() {
  const session = useSession();
  let authContent: React.ReactNode;

  if (session.status === "loading") {
    return null;
  }
  if (session.data?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.data.user.image || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={signOut}>
              <Button type="submit">Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={signIn}>
            <Button type="submit" variant="bordered" color="secondary">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={signIn}>
            <Button type="submit" variant="flat" color="primary">
              Sign UP
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }

  return authContent;
}
