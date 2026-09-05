"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { mobileLinks } from "@/data/navigation";

const MobileNav = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="lg:hidden z-50">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-3xl p-2 focus:outline-none"
        aria-label="Open menu"
        aria-expanded={open}
      >
        <CiMenuFries />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-primary z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        {/* Close Button */}
        <div className="flex items-center p-4 text-accent">
          <button
            type="button"
            onClick={closeMenu}
            className="text-2xl"
            aria-label="Close menu"
          >
            <IoMdClose />
          </button>
        </div>

        {/* Logo */}
        <Link
          className="flex justify-center items-center mb-12 mt-8"
          href="/"
          onClick={closeMenu}
        >
          <h1 className="text-4xl">
            <span className="text-accent hover:text-accent-hover">.</span> Amir
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="w-full flex items-center flex-col gap-6 p-4">
          {mobileLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={closeMenu}
                className={`text-base font-medium transition-colors ${
                  isActive ? "text-accent" : "text-white"
                } hover:text-blue-500 dark:hover:text-blue-300`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
