import {
    FaBookOpen,
    FaClock,
    FaKeyboard,
    FaLanguage,
    FaProjectDiagram,
    FaRegCalendarCheck,
    FaRobot,
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
    {name: "نظم کاری", Icon: FaRegCalendarCheck}
];

const SoftSkillsTab = () => {
    return (
        <div className="flex flex-col items-center lg:items-stretch space-y-3">
            <h3>مهارت های نرم من</h3>
            <p className="text-white/70 lg:max-w-[75%] leading-7">
                دارای مهارت‌های نرم کلیدی مثل مدیریت زمان، یادگیری مداوم، همکاری تیمی و مدیریت پروژه. توانایی بالا در
                کار گروهی، حل مسئله و برقراری ارتباط مؤثر برای پیشبرد بهتر اهداف تیمی و فنی.
            </p>

            <div className="w-full lg:max-w-[90%] mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px] ">
                {softSkills.map(({name, Icon}) => (
                    <div key={name}
                         className="w-full h-[140px] bg-[#232329] rounded-xl flex flex-col items-center justify-center gap-2 text-white group">
                        <Icon className="text-5xl text-white group-hover:text-accent transition-all duration-500"/>
                        <span>{name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SoftSkillsTab;