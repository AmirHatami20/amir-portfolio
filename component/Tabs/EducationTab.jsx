const education = [
    {
        title: "ادامه تحصیل در مهندسی نرم‌افزار",
        place: "برنامه‌ریزی برای مقطع کارشناسی",
        year: "در حال برنامه‌ریزی",
        description:
            "قصد دارم در مقطع کارشناسی مهندسی نرم‌افزار ادامه تحصیل دهم و دانشم را در طراحی سیستم‌ها و معماری نرم‌افزار گسترش دهم.",
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
        <div className="w-full lg:max-w-[90%] mt-4 grid grid-cols-1  md:grid-cols-2 gap-[30px]">
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
