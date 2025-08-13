import Link from 'next/link';
import Nav from "@/component/Nav";
import Button from "@/component/ui/Button";
import MobileNav from "@/component/MobileNav";

const Header = () => {
    return (
        <header className="pt-5 pb-3 lg:py-7 text-white">
            <div className="container flex justify-between items-center">

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
                    <h1 className="text-4xl font-semibold">
                        <span className="text-accent hover:text-accent-hover">.</span> Amir
                    </h1>
                </Link>

            </div>
        </header>
    )
}

export default Header;