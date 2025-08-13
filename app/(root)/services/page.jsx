"use client"

import {BsArrowDownLeft} from 'react-icons/bs'
import Link from 'next/link'
import toPersianNumber from "@/utils/toPersianNumber";
import ArrowNav from "@/component/ArrowNav";
import {motion} from "framer-motion";

const services = [
    {
        num: "01",
        title: "توسعه فول‌استک با Next.js و MERN",
        description:
            "پیاده‌سازی وب‌اپلیکیشن‌های فول‌استک مدرن با Next.js، React، Node.js و MongoDB، همراه با بهینه‌سازی سئو و رندر سمت سرور (SSR)."
    },
    {
        num: "02",
        title: "توسعه فرانت‌اند سریع و واکنش‌گرا",
        description:
            "ساخت رابط‌های کاربری زیبا و واکنش‌گرا با React، Tailwind CSS و TypeScript، همراه با مدیریت داده‌ها با Redux و React Query."
    },
    {
        num: "03",
        title: "توسعه بک‌اند امن و مقیاس‌پذیر",
        description:
            "طراحی و پیاده‌سازی APIهای RESTful و GraphQL با Node.js و Express، اتصال به MongoDB و PostgreSQL، و استفاده از Drizzle ORM."
    },
    {
        num: "04",
        title: "احراز هویت و امنیت پیشرفته",
        description:
            "پیاده‌سازی سیستم‌های احراز هویت با NextAuth.js و JWT، رمزنگاری داده‌ها، و اطمینان از امنیت کامل کاربران و اطلاعات."
    }
];


const Services = () => {
    return (
        <section className="py-6 lg:py-4">
            <div className="container">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: {delay: 2, duration: 0.3, ease: "easeIn"}
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    {services?.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-center gap-3 lg:gap-5 group border border-white/20 hover:border-accent/40 transition-colors duration-500 p-4 rounded-2xl"
                        >
                            {/* Top */}
                            <div className="w-full flex justify-between items-center">
                                <span
                                    className="text-4xl lg:text-5xl font-bold text-outline text-transparent transition-colors duration-500"
                                >
                                    {toPersianNumber(service.num)}
                                </span>
                                <Link
                                    href=""
                                    className="w-10 h-10 lg:w-[70px] lg:h-[70px] rounded-full bg-white group-hover:bg-accent transition-all flex justify-center items-center hover:rotate-45"
                                >
                                    <BsArrowDownLeft className="text-xl lg:text-3xl text-primary"/>
                                </Link>
                            </div>
                            {/* Title */}
                            <h2 className="text-lg lg:text-3xl leading-7 group-hover:text-accent transition-all">
                                {service.title}
                            </h2>
                            {/* Description */}
                            <p className="text-sm leading-6 lg:leading-7 lg:text-base text-white/70">{service.description}</p>
                        </div>
                    ))}
                    <ArrowNav prevPath="/resume" nextPath="/work"/>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;