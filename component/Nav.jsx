"use client"

import Link from 'next/link';
import {usePathname} from "next/navigation";

const links = [
    {name: "خدمات", path: "/services"},
    {name: "نمونه‌کار", path: "/work"},
    {name: "رزومه", path: "/resume"},
    {name: "صفحه اصلی", path: "/"},
]

const Nav = () => {
    const pathName = usePathname()

    return (
        <nav className="flex gap-8">
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
    );
};

export default Nav;
