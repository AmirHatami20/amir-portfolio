"use client"

import {useState} from 'react'

import {Swiper, SwiperSlide} from "swiper/react"
import Image from "next/image"
import {motion} from "framer-motion";
import {BsArrowUpLeft, BsGithub} from "react-icons/bs";
import toPersianNumber from "@/utils/toPersianNumber";
import WorkSliderBtn from "@/component/WorkSliderBtn";
import ArrowNav from "@/component/ArrowNav";

const projects = [
    {
        num: "01",
        name: "سایت سبزلرن",
        description: 'پیاده‌سازی سایت آموزشی سبزلرن با MERN استک؛ شامل پنل ادمین، احراز هویت امن با JWT، جستجوی هوشمند، ذخیره تصاویر در فضای ابری، امکان ثبت نظر کاربران و پشتیبانی از حالت تیره و روشن.',
        stack: ["React", "Tailwind", "NodeJs", "MongoDB", "Multer", "JWT"],
        image: "/images/work/Untitled-1.png",
        icon: "/images/work/icons/1.png",
        live: "https://sabzlearn-frontend.vercel.app/",
        github: "https://github.com/AmirHatami20/sabzlearn-frontend"
    },
    {
        num: "02",
        name: "کتابخانه آنلاین",
        description: 'پیاده‌سازی سایت کتابخانه آنلاین با NextJs و تایپ‌اسکریپت،دارای پنل ادمین، احراز هویت امن با ورود گوگل، جستجوی پیشرفته، ذخیره‌سازی تصاویر در فضای ابری و مدیریت وضعیت با ReactQuery.',
        stack: ["NextJs", "Tailwind", "TypeScript", "ReactQuery", "NextAuth", "PostgerSql", "React"],
        image: "/images/work/Untitled-2.png",
        icon: "/images/work/icons/2.png",
        live: "https://library-khaki-sigma.vercel.app/",
        github: "https://github.com/AmirHatami20/library"
    },
    {
        num: "03",
        name: "فروشگاه پیتزا",
        description: 'پیاده‌سازی فروشگاه پیتزا با NextJs و تایپ‌اسکریپت، دارای پنل ادمین حرفه ای، احراز هویت امن وپیشرفته با ورود گوگل، سبد خرید داینامیک با انتخاب سایز محصول، و ذخیره‌سازی تصاویر در فضای ابری.',
        stack: ["NextJs", "Tailwind", "TypeScript", "MongoDB", "Multer", "NextAuth", "Redux"],
        image: "/images/work/Untitled-3.png",
        icon: "/images/work/icons/3.svg",
        live: "https://pizza-shop-fawn-zeta.vercel.app/",
        github: "https://github.com/AmirHatami20/pizza-shop"
    },
    {
        num: "04",
        name: "فروشگاه میوه",
        description: 'پیاده‌سازی فروشگاه میوه با NextJs و تایپ‌اسکریپت، شامل پنل ادمین کامل، احراز هویت امن و پیشرفته، سبد خرید کارآمد و ذخیره‌سازی تصاویر در فضای ابری، به همراه مدیریت داده‌ها با ReactQuery.',
        stack: ["NextJs", "Tailwind", "TypeScript", "MongoDB", "Multer", "JWT", "ReactQuery"],
        image: "/images/work/Untitled-4.png",
        icon: "/images/work/icons/4.png",
        live: "https://fruits-shop-five.vercel.app/",
        github: "https://github.com/AmirHatami20/fruits-shop"
    },
    {
        num: "05",
        name: "سایت سفر",
        description: 'پیاده‌سازی سایت سفر بدون بک‌اند با NextJs و تایپ‌اسکریپت که با انیمیشن‌های جذاب و طراحی زیبا، تجربه کاربری فرانت‌اند روان و دلنشینی ارائه می‌دهد.',
        stack: ["NextJs", "Tailwind", "TypeScript", "Animation"],
        image: "/images/work/Untitled-5.png",
        icon: "/images/work/icons/5.svg",
        live: "https://travel-app-two-wine.vercel.app/",
        github: "https://github.com/AmirHatami20/travel-app"
    }
]


const work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }

    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 2, duration: 0.4, easing: 'easeIn'},
            }}
            className="flex flex-col justify-center py-3 md:py-6 xl:px-0"
        >
            <div className="container">
                <div className="flex flex-col lg:flex-row-reverse lg:gap-[30px]">
                    <div className="w-full lg:w-1/2">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}

                            className="lg:h-[500px] mb-4"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="w-full"
                                >
                                    <div
                                        className="h-[260px] lg:h-[450px] relative group flex justify-center items-center bg-pink-50/20"
                                    >
                                        {/* Overlay */}
                                        <div className="absolute top-0 bottom-0 w-full bg-black/10 z-10"/>
                                        {/* Image */}
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={project.image}
                                                fill
                                                className="object-cover object-top rounded"
                                                alt="product Img"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            {/* Swiper buttons */}
                            <WorkSliderBtn/>
                        </Swiper>
                    </div>
                    <div
                        className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between"
                    >
                        <div className="flex flex-col gap-2">
                            {/* Outline Num */}
                            <div
                                className="text-5xl lg:text-7xl leading-none font-bold text-transparent text-outline">
                                {toPersianNumber(project.num)}
                            </div>
                            {/* Project Name */}
                            <div className="flex gap-x-3 items-center">
                                <h2 className="text-4xl lg:text-[40px] leading-none text-white group-hover:text-accent transition-colors duration-200">
                                    {project.name}
                                </h2>
                                <img
                                    src={project.icon}
                                    alt="icon"
                                    className="w-9 lg:w-11 h-9 lg:h-11 rounded-full shadow"
                                />
                            </div>
                            {/* Project Desc */}
                            <p className="text-white/70 my-1.5 md:my-2.5">
                                {project.description}
                            </p>
                            {/* Stock */}
                            <ul className="flex flex-wrap gap-3">
                                {project.stack.map((item, index) => (
                                    <li
                                        className="text-xl text-accent/70"
                                        key={index}
                                    >
                                        {item}
                                        {index !== project.stack.length - 1 && " ,"}
                                    </li>
                                ))}
                            </ul>
                            {/* Border */}
                            <div className="border border-white/20"/>
                            {/* Buttons */}
                            <div className="flex gap-x-5">
                                <div className="flex flex-col gap-y-1 items-center justify-center group">
                                    <a
                                        target="_blank"
                                        href={project.live}
                                        className="w-16 h-16 flex justify-center items-center text-white bg-[#232329] text-3xl rounded-full hover:bg-accent hover:text-primary transition duration-500"
                                    >
                                        <BsArrowUpLeft/>
                                    </a>
                                    <span
                                        className="text-sm text-white/80 group-hover:text-accent transition-colors duration-500">لینک سایت</span>
                                </div>
                                <div className="flex flex-col gap-y-1 items-center justify-center group">
                                    <a
                                        target="_blank"
                                        href={project.github}
                                        className="w-16 h-16 flex justify-center items-center text-white bg-[#232329] text-3xl rounded-full hover:bg-accent hover:text-primary transition duration-500"
                                    >
                                        <BsGithub/>
                                    </a>
                                    <span
                                        className="text-sm text-white/80 group-hover:text-accent transition-colors duration-500">لینک گیت</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ArrowNav prevPath="/services" nextPath="/contact"/>
        </motion.section>
    );
};

export default work;