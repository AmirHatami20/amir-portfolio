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
    SiBootstrap, SiPostgresql, SiTypescript,
} from "react-icons/si";
import {FaCode, FaStar, FaSyncAlt, FaUserShield} from "react-icons/fa";

const skills = [
    {name: "Next.js", Icon: SiNextdotjs, stars: 5},
    {name: "React", Icon: SiReact, stars: 5},
    {name: "Node.js", Icon: SiNodedotjs, stars: 4},
    {name: "MongoDB", Icon: SiMongodb, stars: 4},
    {name: "HTML", Icon: SiHtml5, stars: 5},
    {name: "CSS", Icon: SiCss3, stars: 5},
    {name: "JavaScript", Icon: SiJavascript, stars: 5},
    {name: "TypeScript", Icon: SiTypescript, stars: 4},
    {name: "Tailwind CSS", Icon: SiTailwindcss, stars: 5},
    {name: "Bootstrap", Icon: SiBootstrap, stars: 3},
    {name: "Redux", Icon: SiRedux, stars: 4},
    {name: "React Query", Icon: FaSyncAlt, stars: 5},
    {name: "PostgreSQL", Icon: SiPostgresql, stars: 3},
    {name: "Drizzle ORM", Icon: FaCode, stars: 4},
    {name: "NextAuth.js", Icon: FaUserShield, stars: 4},

];


const SkillsTab = () => {
    return (
        <div className="tabs-wrapper">
            <h3>مهارت های من</h3>
            <p className="tabs-text">
                تسلط کامل به توسعه فول‌استک با تمرکز بر MERN Stack و ابزارهای مکمل مانند Next.js، Tailwind CSS و
                TypeScript.
                تجربه کار با پایگاه‌داده‌های NoSQL و SQL، مدیریت وضعیت با React Query.
            </p>
            <div
                className="w-full lg:max-w-[85%] mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                {skills.map(({name, Icon, stars}) => (
                    <div
                        key={name}
                        className="w-full h-[120px] bg-[#232329] rounded-xl flex flex-col items-center justify-center gap-2 text-white group relative"
                    >
                        <Icon className="text-[45px] text-white group-hover:text-accent transition-all duration-500"/>
                        <span className="text-sm text-white text-center">{name}</span>
                        <div className="flex items-center gap-x-0.5">
                            {Array(5 - stars).fill("").map((_, index) => (
                                <FaStar className="text-white text-xs" key={index}/>
                            ))}
                            {Array(stars).fill("").map((_, index) => (
                                <FaStar className="text-accent text-xs" key={index}/>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsTab;