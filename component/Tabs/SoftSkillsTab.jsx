import {
    FaBookOpen,
    FaClock, FaCode,
    FaKeyboard,
    FaLanguage,
    FaProjectDiagram,
    FaRegCalendarCheck,
    FaRobot, FaSmileWink,
    FaUsers
} from "react-icons/fa";

const softSkills = [
    {name: "تسلط بر انگلیسی", Icon: FaLanguage},
    {name: "تایپ ۱۰ انگشتی", Icon: FaKeyboard},
    {name: "مدیریت پروژه", Icon: FaProjectDiagram},
    {name: "یادگیری مداوم", Icon: FaBookOpen},
    {name: "مدیریت زمان", Icon: FaClock},
    {name: "کار با هوش مصنوعی", Icon: FaRobot},
    {name: "همکاری تیمی", Icon: FaUsers},
    {name: "نظم کاری", Icon: FaRegCalendarCheck},
    {name: "شوخ‌طبعی", Icon: FaSmileWink},
    {name: "قدرت حل‌مسئله", Icon: FaCode}
];


const SoftSkillsTab = () => {
    return (
        <div className="tabs-wrapper">
            <h3>مهارت های نرم من</h3>
            <p className="tabs-text">
                دارای مهارت‌های نرم کلیدی مثل مدیریت زمان، یادگیری مداوم، همکاری تیمی و مدیریت پروژه. توانایی بالا در
                کار گروهی، حل مسئله و برقراری ارتباط مؤثر برای پیشبرد بهتر اهداف تیمی و فنی.
            </p>

            <div
                className="w-full lg:max-w-[85%] mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
                {softSkills.map(({name, Icon}) => (
                    <div
                        key={name}
                         className="w-full h-[140px] bg-[#232329] rounded-xl flex flex-col items-center justify-center gap-2 text-white text-center group"
                    >
                        <Icon className="text-5xl text-white group-hover:text-accent transition-all duration-500"/>
                        <span>{name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SoftSkillsTab;