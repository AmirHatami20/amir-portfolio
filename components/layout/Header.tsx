"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import MobileNav from "@/components/layout/MobileNav";
import React from "react";
import { usePathname } from "next/navigation";
import { links } from "@/data/navigation";

export default function Header() {
  const pathName = usePathname();

  return (
    <header className="pt-5 pb-3 lg:py-7 text-white">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Amir <span className="text-accent hover:text-accent-hover">.</span>
          </h1>
        </Link>

        {/* Desktop nav & hire button */}
        <nav className="hidden lg:flex gap-8">
          {links.map((link, index) => (
            <Link
              className={`${pathName === link.path && "text-accent border-b-2"} border-accent hover:text-accent transition-all`}
              key={index}
              href={link.path}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="hidden lg:flex">
          <Button>Contact Me</Button>
        </Link>

        {/* Mobile nav */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
