"use client"

import {BsArrowDownLeft} from 'react-icons/bs'
import Link from 'next/link'
import toPersianNumber from "@/utils/toPersianNumber";
import ArrowNav from "@/component/ArrowNav";
import {motion} from "framer-motion";

const services = [
    {
        num: "01",
        title: "توسعه فرانت‌اند مدرن",
        description:
            "طراحی رابط‌های کاربری واکنش‌گرا و سریع با React، Next.js و Tailwind CSS، تمرکز روی تجربه کاربری و سازگاری با دستگاه‌های مختلف.",
    },
    {
        num: "02",
        title: "توسعه بک‌اند با Node.js",
        description:
            "ساخت سرورهای امن و مقیاس‌پذیر با Node.js و Express، طراحی APIهای ساختارمند و اتصال به MongoDB با تمرکز بر امنیت و پایداری.",
    },
    {
        num: "03",
        title: "احراز هویت و امنیت کاربران",
        description:
            "پیاده‌سازی سیستم‌های احراز هویت با JWT، آپلود امن فایل‌ها با Multer و رمزنگاری داده‌ها برای حفاظت کامل از اطلاعات کاربران.",
    },
    {
        num: "04",
        title: "توسعه اپلیکیشن‌های فول‌استک",
        description:
            "ساخت اپلیکیشن‌های کامل فول‌استک با هماهنگی فرانت‌اند و بک‌اند، مدیریت وضعیت با Redux و ساختار منظم برای توسعه آسان آینده.",
    },
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
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-center gap-6 group border border-white/20 hover:border-accent/40 transition-colors duration-500 p-4 rounded-2xl"
                        >
                            {/* Top */}
                            <div className="w-full flex justify-between items-center">
                                <span
                                    className="text-4xl font-dana-bold text-outline text-transparent transition-colors duration-500"
                                >
                                    {toPersianNumber(service.num)}
                                </span>
                                <Link
                                    href=""
                                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45"
                                >
                                    <BsArrowDownLeft className="text-3xl text-primary"/>
                                </Link>
                            </div>
                            {/* Title */}
                            <h2 className="leading-none group-hover:text-accent transition-all duration-500">
                                {service.title}
                            </h2>
                            {/* Description */}
                            <p className="text-white/70">{service.description}</p>
                        </div>
                    ))}
                    <ArrowNav prevPath="/resume" nextPath="/work"/>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;