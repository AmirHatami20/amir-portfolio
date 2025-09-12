"use client";
import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import {motion} from "framer-motion";
import {BsArrowUpLeft, BsGithub} from "react-icons/bs";

import {
    FaReact,
    FaNodeJs,
    FaUserShield,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiTailwindcss,
    SiMongodb,
    SiPostgresql,
    SiRedux,
    SiJsonwebtokens,
    SiTypescript, SiReactquery, SiExpress, SiJavascript,
} from "react-icons/si";

import toPersianNumber from "@/utils/toPersianNumber";
import WorkSliderBtn from "@/component/WorkSliderBtn";
import ArrowNav from "@/component/ArrowNav";

const stackIcons = {
    React: <FaReact className="text-sky-400 text-5xl"/>,
    NextJS: <SiNextdotjs className="text-white text-5xl"/>,
    TailwindCSS: <SiTailwindcss className="text-cyan-400 text-5xl"/>,
    NodeJS: <FaNodeJs className="text-green-500 text-5xl"/>,
    MongoDB: <SiMongodb className="text-green-600 text-5xl"/>,
    ExpressJS: <SiExpress className="text-gray-500 text-5xl"/>,
    PostgreSQL: <SiPostgresql className="text-sky-600 text-5xl"/>,
    JavaScript: <SiJavascript className="text-yellow-400 text-5xl"/>,
    TypeScript: <SiTypescript className="text-blue-500 text-5xl"/>,
    ReactQuery: <SiReactquery className="text-pink-400 text-5xl"/>,
    JWT: <SiJsonwebtokens className="text-yellow-500 text-5xl"/>,
    Redux: <SiRedux className="text-purple-500 text-5xl"/>,
    NextAuth: <FaUserShield className="text-indigo-500 text-5xl"/>,
};

const projects = [
    {
        num: "01",
        name: "فروشگاه اسباب‌بازی",
        description: "پیاده‌سازی فول استک فروشگاه اسباب‌بازی با NextJs به صورت  ریسپانسیو و بهینه",
        features: ["پنل ادمین", "احراز هویت امن", "جستجوی پیشرفته", "ثبت سفارش", "فیلتریتگ", "سبد خرید"],
        stack: ["NextJS", "TailwindCSS", "TypeScript", "ReactQuery", "NodeJS", "MongoDB", "NextAuth"],
        image: "/images/work/toy-shop.png",
        icon: "/images/work/icons/toy-shop.png",
        live: "https://toy-shop-pi.vercel.app",
        github: "https://github.com/AmirHatami20/toy-shop",
    },
    {
        num: "02",
        name: "سایت سبزلرن",
        description: "پیاده‌سازی فول استک سایت آموزشی سبزلرن با استک MERN به صورت ریسپانسیو و بهینه",
        features: ["پنل ادمین", "جستجوی هوشمند", "احراز هویت امن", "سبد خرید", "حالت تاریک/روشن", "جستجوی هوشمند"],
        stack: ["React", "TailwindCSS", "JavaScript", "NodeJS", "ExpressJS", "MongoDB", "JWT"],
        image: "/images/work/sabzlearn.png",
        icon: "/images/work/icons/sabzlearn.png",
        live: "https://sabzlearn-frontend.vercel.app",
        github: "https://github.com/AmirHatami20/sabzlearn-frontend",
    },
    {
        num: "03",
        name: "کتابخانه آنلاین",
        description: "پیاده‌سازی فول استک کتابخانه آنلاین با NextJs به صورت ریسپانسیو و بهینه",
        features: ["پنل ادمین", "احراز هویت امن", "جستجوی پیشرفته", "فیلتریتگ", "ذخیره تصاویر", "مدیریت داده ها"],
        stack: ["NextJS", "TailwindCSS", "TypeScript", "ReactQuery", "PostgreSQL", "NodeJS", "NextAuth"],
        image: "/images/work/library.png",
        icon: "/images/work/icons/library.png",
        live: "https://library-khaki-sigma.vercel.app",
        github: "https://github.com/AmirHatami20/library",
    },
    {
        num: "04",
        name: "فروشگاه پیتزا",
        description: "پیاده‌سازی فول استک فروشگاه پیتزا با NextJs به صورت ریسپانسیو و بهینه",
        features: ["پنل ادمین", "احراز هویت امن", "جستجوی پیشرفته", "فیلتریتگ", "ذخیره تصاویر", "سبد خرید"],
        stack: ["NextJS", "TailwindCSS", "TypeScript", "ReactQuery", "NodeJS", "MongoDB", "NextAuth"],
        image: "/images/work/pizza.png",
        icon: "/images/work/icons/pizza.svg",
        live: "https://pizza-shop-fawn-zeta.vercel.app",
        github: "https://github.com/AmirHatami20/pizza-shop",
    },
    {
        num: "05",
        name: "تره بار آنلاین",
        description: "پیاده‌سازی فول استک تره بار آنلاین با NextJs به صورت ریسپانسیو و بهینه",
        features: ["پنل ادمین", "احراز هویت امن", "فیلتریتگ", "ذخیره تصاویر", "سبد خرید"],
        stack: ["NextJS", "TailwindCSS", "TypeScript", "Redux", "NodeJS", "MongoDB", "JWT"],
        image: "/images/work/fruits.png",
        icon: "/images/work/icons/fruits.png",
        live: "https://fruits-shop-five.vercel.app",
        github: "https://github.com/AmirHatami20/fruits-shop",
    },
    {
        num: "06",
        name: "سایت نظرسنجی",
        description: "پیاده‌سازی فول استک سایت نظرسنجی با NextJs به صورت ریسپانسیو و بهینه",
        features: ["ساخت نظرسنجی", "امکان رای دادن", "احراز هویت امن", "دیدن نظرات", "ذخیره نظرسنجی", "فیلتریتگ"],
        stack: ["NextJS", "TailwindCSS", "TypeScript", "ReactQuery", "NodeJS", "MongoDB", "JWT"],
        image: "/images/work/polling.png",
        icon: "/images/work/icons/polling.png",
        live: "https://polling-site-dun.vercel.app",
        github: "https://github.com/AmirHatami20/polling-site",
    },
];


const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        setProject(projects[swiper.activeIndex]);
    };

    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 0.4, duration: 0.4, easing: "easeIn"},
            }}
            className="flex flex-col justify-center py-3 md:py-6 xl:px-0"
        >
            <div className="container">
                <div className="flex flex-col lg:flex-row-reverse lg:gap-[30px]">
                    {/* Slider */}
                    <div className="w-full lg:w-1/2">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="lg:h-[500px] mb-4"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((p, index) => (
                                <SwiperSlide key={index} className="w-full">
                                    <div
                                        className="h-[260px] lg:h-[450px] relative group flex justify-center items-center bg-pink-50/20">
                                        <div className="absolute top-0 bottom-0 w-full bg-black/10 z-10"/>
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={p.image}
                                                fill
                                                className="object-cover object-top rounded"
                                                alt="project Img"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <WorkSliderBtn/>
                        </Swiper>
                    </div>

                    {/* Details */}
                    <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between">
                        <div className="flex flex-col gap-2">
                            <div className="text-5xl lg:text-7xl leading-none font-bold text-transparent text-outline">
                                {toPersianNumber(project.num)}
                            </div>

                            <div className="flex gap-x-3 items-center">
                                <h2 className="text-2xl lg:text-[40px] leading-none text-white transition-colors duration-200">
                                    {project.name}
                                </h2>
                                <img
                                    src={project.icon}
                                    alt="icon"
                                    className="w-10 md:w-13 h-10 md:h-13 rounded-full shadow"
                                />
                            </div>

                            <p className="text-white/70">
                                {project.description}
                            </p>

                            <ul className="grid grid-cols-2 md:grid-cols-3 gap-1">
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-1.5 rounded-md">
                                        <span className="w-3 h-3 bg-accent rounded-full"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <ul className="flex flex-wrap items-center py-3 gap-2">
                                {project.stack.map((tech, idx) => (
                                    <li key={idx} className="flex items-center bg-[#232329] p-2 rounded-md">
                                        {stackIcons[tech]}
                                    </li>
                                ))}
                            </ul>

                            <div className="border border-white/20"/>

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
                                        className="text-sm text-white/80 group-hover:text-accent transition-colors duration-500">
                                        لینک سایت
                                    </span>
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
                                        className="text-sm text-white/80 group-hover:text-accent transition-colors duration-500">
                                        لینک گیت
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ArrowNav prevPath="/resume" nextPath="/services"/>
        </motion.section>
    );
};

export default Work;
