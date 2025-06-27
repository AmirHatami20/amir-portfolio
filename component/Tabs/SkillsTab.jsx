import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiMongodb,
    SiRedux,
    SiBootstrap,
} from "react-icons/si";
import {FaStar} from "react-icons/fa";

const skills = [
    {name: "HTML", Icon: SiHtml5, stars: 5},
    {name: "CSS", Icon: SiCss3, stars: 5},
    {name: "JavaScript", Icon: SiJavascript, stars: 5},
    {name: "React", Icon: SiReact, stars: 5},
    {name: "Tailwind CSS", Icon: SiTailwindcss, stars: 5},
    {name: "Node.js", Icon: SiNodedotjs, stars: 5},
    {name: "MongoDB", Icon: SiMongodb, stars: 5},
    {name: "Next.js", Icon: SiNextdotjs, stars: 4},
    {name: "Bootstrap", Icon: SiBootstrap, stars: 4},
    {name: "Redux", Icon: SiRedux, stars: 4},
];


const SkillsTab = () => {
    return (
        <div className="tabs-wrapper">
            <h3>مهارت های من</h3>
            <p className="tabs-text">
                تسلط کامل به توسعه فول‌استک با استفاده از React، Next.js، Node.js و پایگاه‌داده‌های MongoDB و MySQL.
                همچنین تجربه کار با ابزارهایی مثل Tailwind، Redux، Git، JWT و Multer برای ساخت اپلیکیشن‌های کاربردی و
                مقیاس‌پذیر.
            </p>

            <div
                className="w-full lg:max-w-[85%] mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[20px] ">
                {skills.map(({name, Icon, stars}) => (
                    <div
                        key={name}
                        className="w-full h-[120px] bg-[#232329] rounded-xl flex flex-col items-center justify-center gap-4 text-white group relative"
                    >
                        <div
                            className="absolute bottom-full py-0.5 text-sm left-0 text-white text-center right-0  rounded-md opacity-0 group-hover:opacity-100 transition duration-500"
                        >
                            {name}
                        </div>
                        <Icon className="text-5xl text-white group-hover:text-accent transition-all duration-500"/>
                        <div className="flex items-center gap-x-0.5">
                            {Array(5 - stars).fill("").map((_, index) => (
                                <FaStar className="text-white" key={index}/>
                            ))}
                            {Array(stars).fill("").map((_, index) => (
                                <FaStar className="text-accent" key={index}/>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsTab;