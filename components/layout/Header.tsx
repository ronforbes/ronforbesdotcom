import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">{SITE_NAME}</span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
