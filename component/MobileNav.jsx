"use client"

import {useState} from "react"
import {usePathname} from "next/navigation"
import Link from "next/link"
import {CiMenuFries} from "react-icons/ci"
import {IoMdClose} from "react-icons/io"

const links = [
    {name: "صفحه اصلی", path: "/"},
    {name: "رزومه", path: "/resume"},
    {name: "نمونه‌کار", path: "/work"},
    {name: "خدمات", path: "/services"},
    {name: "ارتباط با من", path: "/contact"},
]

const MobileNav = () => {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    return (
        <div className="lg:hidden z-50">
            {/* Trigger Button */}
            <button
                onClick={() => setOpen(true)}
                className="text-3xl p-2 focus:outline-none"
            >
                <CiMenuFries/>
            </button>

            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Slide Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-primary z-50 transform transition-transform duration-300 ${
                    open ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex items-center p-4 text-accent">
                    <button
                        onClick={() => setOpen(false)}
                        className="text-2xl"
                    >
                        <IoMdClose/>
                    </button>
                </div>

                {/* Logo */}
                <Link
                    className="flex justify-center items-center mb-12 mt-8"
                    href="/"
                    onClick={() => setOpen(false)}>
                    <h1 className="text-4xl">
                        <span className="text-accent hover:text-accent-hover">.</span> Amir
                    </h1>
                </Link>

                <nav className="w-full flex items-center flex-col gap-6 p-4">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            onClick={() => setOpen(false)}
                            className={`text-base font-medium transition-colors ${
                                pathname === link.path
                                    ? "text-accent"
                                    : "text-white"
                            } hover:text-blue-500 dark:hover:text-blue-300`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    )
}

export default MobileNav
