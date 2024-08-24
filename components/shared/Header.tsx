import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36 ">
          <Image
            src="/assets/images/logo.svg"
            alt="Evently logo"
            width={128}
            height={38}
          />
        </Link>
        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button asChild className="rounded-full" size="lg">
                <Link href="/sign-in">Login</Link>
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
