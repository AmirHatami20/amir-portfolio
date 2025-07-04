import Link from 'next/link';
import Nav from "@/component/Nav";
import Button from "@/component/ui/Button";
import MobileNav from "@/component/MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-10 text-white">
            <div className="max-w-[1280px] mx-auto px-4 flex justify-between items-center">

                {/* Desktop nav & hire button */}
                <div className="hidden lg:flex items-center gap-8">
                    <Link href="/contact">
                        <Button>ارتباط با من</Button>
                    </Link>
                    <Nav />
                </div>

                {/* Mobile nav */}
                <div className="lg:hidden">
                    <MobileNav/>
                </div>

                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-dana-demiBold">
                        <span className="text-accent hover:text-accent-hover">.</span> Amir
                    </h1>
                </Link>

            </div>
        </header>
    )
}

export default Header;