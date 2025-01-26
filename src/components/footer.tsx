
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { CommandIcon, Copyright, GithubIcon, HeartIcon, Linkedin, TriangleIcon, TwitterIcon } from "lucide-react";
import { ModeToggle } from "./theme-toggle";

export function Footer() {
  return (
    <footer className="border-t h-16">
      <div className="container mx-auto w-[90vw] flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-3">
          <p className="text-center">
            Built and Operated by
            <Link
              className="px-1 underline underline-offset-2"
              href="#"
            >
              Webners
            </Link>
            . Copyright &copy; {new Date().getFullYear()} WeForms.
          </p>
        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
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
    </>
  );
}
