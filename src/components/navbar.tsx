import { ModeToggle } from "@/components/theme-toggle";
import { GithubIcon, TwitterIcon, CommandIcon, ArrowUpRight, Linkedin } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Anchor from "./anchor";
import { SheetClose } from "@/components/ui/sheet";
import { SheetLeftbar } from "./leftbar";
import Image from "next/image";

export const NAVLINKS = [
  {
    title: "Documentation",
    href: `/docs}`,
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Pricing",
    href: "/pricing"
  },
  {
    title: "Templates",
    href: "#",
    icon: <ArrowUpRight width={12} height={12} className="mb-[10]"/>,
    target: '_blank'
  }
];

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 bg-background">
      <div className="mx-auto w-[90vw] lg:w-[90vw] h-full flex items-center justify-between md:gap-2">
        <div className="flex items-center gap-5">
          <SheetLeftbar />
          <div className="flex items-center gap-10">
            <div className="sm:flex hidden">
              <Logo />
            </div>
            <div className="lg:flex hidden items-center gap-6 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="flex ml-2.5 sm:ml-0">
              <Link
                href="https://x.com/codewithgurjot"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
                target="_blank"
              >
                <TwitterIcon className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <Link
                href="https://linkedin.com/in/gurjot-singh-js"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
                target="_blank"
              >
                <Linkedin className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <Image src={'/assets/mailbox.png'} width={25} height={25} alt="WeForms" unoptimized />
      <h2 className="font-bold text-xl font-mono">WeForms</h2>
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-primary dark:font-medium font-semibold"
            absolute
            className="flex items-center dark:text-stone-300/85 text-stone-800 relative"
            href={item.href}
            target={`${item.target || ''}`}
          >
            {item.title}
            {
              item.icon
            }
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}