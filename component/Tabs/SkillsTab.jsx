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
    SiMysql,
    SiGit,
    SiPostman,
    SiTypescript
} from "react-icons/si";
import {FaKey, FaNetworkWired} from "react-icons/fa";

const skills = [
    {name: "HTML", Icon: SiHtml5},
    {name: "CSS", Icon: SiCss3},
    {name: "JavaScript", Icon: SiJavascript},
    {name: "React", Icon: SiReact},
    {name: "Next.js", Icon: SiNextdotjs},
    {name: "Tailwind CSS", Icon: SiTailwindcss},
    {name: "Bootstrap", Icon: SiBootstrap},
    {name: "Redux", Icon: SiRedux},
    {name: "Node.js", Icon: SiNodedotjs},
    {name: "MongoDB", Icon: SiMongodb},
    {name: "MySQL", Icon: SiMysql},
    {name: "Git", Icon: SiGit},
    {name: "JWT", Icon: FaKey},
    {name: "Postman", Icon: SiPostman},
    {name: "TypeScript", Icon: SiTypescript}
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
                {skills.map(({name, Icon}) => (
                    <div key={name}
                         className="w-full h-[120px] bg-[#232329] rounded-xl flex flex-col items-center justify-center gap-2 text-white group">
                        <Icon className="text-5xl text-white group-hover:text-accent transition-all duration-500"/>
                        <span>{name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsTab;