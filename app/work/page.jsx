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
        title: 'پیاده سازی کامل سایت سبزلرن',
        description: 'پیاده سازی سایت سبز لرن با استفاده از تکنولوژی MERN و بهره گیری عالی سایت ، بارگذاری عکس ها در فضای ابری و سیستم احزار هویت',
        stack: ["React", "Tailwind", "Nodejs", "MongoDB", "JWT"],
        image: "/assets/work/Untitled-1.jpg",
        live: "https://sabzlearn-lovat.vercel.app/",
        github: "https://github.com/AmirHatami20/sabzlearn",
    },
    {
        num: "02",
        name: "فروشگاه سبزیجات",
        title: 'پیاده سازی سایت فروشگاهی',
        description: 'پیاده سازی سایت با استفاده از تکنولوژی MERN و بهره گیری عالی سایت ، بارگذاری عکس ها در فضای ابری و سیستم احزار هویت',
        stack: ["React", "Tailwind", "Nodejs", "MongoDB", "REDUX"],
        image: "/assets/work/Untitled-3.jpg",
        live: "https://vegetable-shop-blue.vercel.app/",
        github: "https://github.com/AmirHatami20/vegetable-shop"
    },
    {
        num: "03",
        name: "سایت نظرسنجی",
        title: 'پیاده سازی سایت نظرسنجی',
        description: 'پیاده سازی سایت با استفاده از تکنولوژی MERN و بهره گیری عالی سایت ، بارگذاری عکس ها در فضای ابری و سیستم احزار هویت',
        stack: ["React", "Tailwind", "Nodejs", "MongoDB", "JWT"],
        image: "/assets/work/Untitled-2.jpg",
        live: "https://polling-site-snowy.vercel.app/dashboard",
        github: "https://github.com/AmirHatami20/polling-site"
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
            className="flex flex-col justify-center py-6 xl:px-0"
        >
            <div className="container">
                <div className="flex flex-col lg:flex-row-reverse lg:gap-[30px]">
                    <div className="w-full lg:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="lg:h-[520px] mb-4"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="w-full"
                                >
                                    <div
                                        className="h-[260px] lg:h-[460px] relative group flex justify-center items-center bg-pink-50/20"
                                    >
                                        {/* Overlay */}
                                        <div className="absolute top-0 bottom-0 w-full bg-black/10 z-10"/>
                                        {/* Image */}
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={project.image}
                                                fill
                                                className="object-cover object-top"
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
                        <div className="flex flex-col gap-2 lg:gap-3">
                            {/* Outline Num */}
                            <div
                                className="text-5xl lg:text-8xl leading-none font-dana-bold text-transparent text-outline">
                                {toPersianNumber(project.num)}
                            </div>
                            {/* Project Category */}
                            <h2 className="text-4xl lg:text-[40px] leading-none text-white group-hover:text-accent transition-colors duration-200">
                                {project.name}
                            </h2>
                            {/* Project Desc */}
                            <p className="text-white/70">
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