import Button from "@/component/ui/Button";
import {FiDownload} from "react-icons/fi";
import Social from "@/component/Social";
import Photo from "@/component/Photo";
import ArrowNav from "@/component/ArrowNav";

const Home = () => {
    return (
        <section className="container h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-between lg:pt-6 lg:pb-14 relative">
                {/* Image  */}
                <div className="flex items-center justify-center w-full mb-6 lg:mb-0 lg:order-2">
                    <Photo/>
                </div>
                {/* Text */}
                <div className="text-center lg:text-right lg:order-1">
                    {/* Desktop */}
                    <span className="text-xl">توسعه دهنده وب</span>
                    <h1 className="hidden lg:block mb-3 lg:mb-6">
                        من‌،
                        <span className="text-accent"> امیررضا حاتمی</span>
                        <br/>عاشق خلق تجربه‌
                        <br/>های دیجیتال.
                    </h1>
                    {/* Mobile */}
                    <h1 className="lg:hidden mb-3 text-4xl text-accent">
                        امیررضا حاتمی
                    </h1>
                    {/* Desktop */}
                    <p className="hidden lg:block w-full max-w-[550px] mb-6 lg:mb-9 text-white/80">
                        توسعه‌دهنده‌ی فول‌استک با تمرکز روی ساخت اپلیکیشن‌های مدرن وب. در فرانت‌اند با React و
                        Next.js رابط‌های کاربری سریع و بهینه طراحی می‌کنم و با Tailwind CSS تجربه‌ای زیبا و منظم
                        برای کاربر می‌سازم. در بک‌اند هم با Node.js و MongoDB، ساختارهایی مقیاس‌پذیر و امن
                        پیاده‌سازی می‌کنم.
                    </p>
                    {/* Mobile */}
                    <p className="block lg:hidden w-full mb-3 lg:mb-5 text-white/80">
                        توسعه دهنده فول استک وب در فرانت تمرکز بر روی React , NextJs , Tailwind است و در بک اند
                        تمرکزم بر روی Nodejs , mongoDB است .
                    </p>

                    {/* Btn and socials */}
                    <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-8">
                        <a href="/resume.pdf" download>
                            <Button
                                variant="outline"
                                size="lg"
                                className="uppercase flex items-center gap-2"
                            >
                                <FiDownload className="text-xl"/>
                                <span>دانلود رزومه</span>
                            </Button>
                        </a>

                        <div className="mb-8 lg:mb-0">
                            <Social
                                containerStyle="flex items-center justify-center gap-3 lg:gap-5"
                                iconStyle="w-9 h-9 border border-accent/80 rounded-full flex justify-center items-center text-accent text-base hover:text-primary hover:bg-accent/90 hover:transition-all duration-500"
                            />
                        </div>
                    </div>

                </div>
            </div>
            <ArrowNav prevPath="/contact" nextPath="/resume"/>
        </section>
    );
};

export default Home;