const education = [
    {
        title: "کارشناسی مهندسی نرم افزار",
        place: "دانشگاه علم و فرهنگ / آموزشگده مهندسی",
        year: "۱۴۰۴",
        description:
            "کسب مهارت جامع در برنامه نویسی و در حال تحصیل در این مقطع.",
    },
    {
        title: "کاردانی نرم‌افزار",
        place: "دانشگاه یادگار امام / آموزشکده فنی",
        year: "۱۴۰۲ - ۱۴۰۴",
        description:
            "آموزش مبانی برنامه‌نویسی، پایگاه‌داده، الگوریتم و ساختار نرم‌افزار؛ پایه‌ای برای ورود به دنیای توسعه و مهندسی نرم‌افزار.",
    },
    {
        title: "دیپلم ریاضی و فیزیک",
        place: "دبیرستان بهشتی",
        year: "۱۳۹۹ - ۱۴۰۲",
        description:
            "کسب مهارت در منطق ریاضی، تحلیل مسائل و تفکر سیستماتیک به عنوان پایه‌ای قوی برای یادگیری برنامه‌نویسی.",
    },
];


const EducationTab = () => (
    <div className="tabs-wrapper">
        <h3>تحصیلات من</h3>
        <p className="tabs-text">
            در مسیر تحصیلی‌ام، با ترکیب دیپلم ریاضی‌فیزیک و کاردانی نرم‌افزار، پایه‌ای قوی در منطق، الگوریتم و توسعه
            نرم‌افزار به دست آورده‌ام. همچنین در حال برنامه‌ریزی برای ادامه تحصیل در مقطع کارشناسی مهندسی نرم‌افزار هستم
            تا دانش فنی‌ام را گسترش دهم و در مسیر تخصصی‌تری حرکت کنم.
        </p>
        <div className="w-full lg:max-w-[90%] mt-4 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {education.map(({title, place, year, description}) => (
                <div key={title} className="flex flex-col space-y-2 bg-[#232329] rounded-xl text-white p-5">
                    <p className="text-accent text-lg">{year}</p>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="text-sm text-gray-400">{place}</p>
                    <p className="text-sm leading-6">{description}</p>
                </div>
            ))}
        </div>
    </div>
);
export default EducationTab;
