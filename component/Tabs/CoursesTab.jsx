import {
    FaChartLine,
    FaCode,
    FaCoffee,
    FaCss3Alt,
    FaHtml5, FaJsSquare,
    FaNodeJs,
    FaReact, FaServer,
    FaSyncAlt, FaThLarge
} from "react-icons/fa";
import Button from "@/component/ui/Button";

const courses = [
    {
        title: "داشبورد با CSS و JS",
        company: "سایت سبزلرن",
        icon: FaChartLine,
        link: "https://sabzlearn.ir/course-cat/front-end/",
    },
    {
        title: "مینی‌پروژه‌های با HTML، CSS",
        company: "سایت سبزلرن",
        icon: FaCode,
        link: "https://sabzlearn.ir/course-cat/front-end/",
    },
    {
        title: "آموزش جاوااسکریپت مقدماتی تا پیشرفته",
        company: "سبزلرن",
        icon: FaJsSquare,
        link: "https://sabzlearn.ir/course/java-script-zero-to-hero/",
    },
    {
        title: "API نویسی با NodeJS",
        company: "سبزلرن",
        icon: FaServer,
        link: "https://sabzlearn.ir/course/api-dev-with-nodejs/",
    },
    {
        title: "آموزش جامع Tailwind CSS",
        company: "سایت سبزلرن",
        icon: FaCoffee,
        link: "https://sabzlearn.ir/course-cat/front-end/",
    },
    {
        title: "آموزش ۲۰ کتابخانه ReactJS",
        company: "سایت سبزلرن",
        icon: FaReact,
        link: "https://sabzlearn.ir/course-cat/front-end/",
    },
    {
        title: "آموزش تخصصی Redux",
        company: "سایت سبزلرن",
        icon: FaSyncAlt,
        link: "https://sabzlearn.ir/course-cat/front-end/",
    },
    {
        title: "آموزش Next.js",
        company: "سایت سبزلرن",
        icon: FaNodeJs,
        link: "https://sabzlearn.ir/course-cat/front-end/",
    },
    {
        title: "آموزش HTML",
        company: "سایت سبزلرن",
        icon: FaHtml5,
        link: "https://sabzlearn.ir/course/html-tutorial/",
    },
    {
        title: "آموزش CSS",
        company: "سایت سبزلرن",
        icon: FaCss3Alt,
        link: "https://sabzlearn.ir/course/css-tutorial/",
    },
    {
        title: "آموزش FlexBox",
        company: "سبزلرن",
        icon: FaThLarge,
        link: "https://sabzlearn.ir/course/flex-box/",
    }
];


const Courses = () => {
    return (
        <div className="tabs-wrapper">
            <h3>دوره های گذرانده شده</h3>
            <p className="tabs-text">
                مسیر یادگیری من فراتر از آموزش‌های رسمی بوده و بخش عمده‌ای از مهارت‌هایم را از طریق دوره‌های تخصصی و
                پروژه‌محور به‌دست آورده‌ام. با گذراندن دوره‌های حرفه‌ای در حوزه فرانت‌اند، مانند ReactJS، Tailwind CSS،
                توانسته‌ام دانش فنی خود را به‌صورت کاربردی و مطابق با نیاز بازار توسعه دهم.
            </p>

            <div className="w-full lg:max-w-[90%] mt-4 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                {courses.map(({title, company, link, icon: Icon}) => (
                    <div
                        key={title}
                        className="flex flex-col justify-between space-y-3 bg-[#232329] rounded-xl text-white p-5"
                    >
                        <div className="flex justify-between items-center">
                            <p>{title}</p>
                            <Icon className="text-accent text-4xl"/>
                        </div>
                        <p className="text-sm text-gray-400">{company}</p>
                        <Button className="w-max mx-auto" variant="outline">
                            <a
                                href={link}
                                className="text-sm leading-6"
                            >
                                لینک دوره
                            </a>
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;