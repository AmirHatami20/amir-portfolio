const about = {
    title: "درباره من",
    description:
        "من امیر حاتمی هستم، توسعه‌دهنده فول‌استک با تخصص در React، Next.js و Node.js. تجربه‌ی چند ساله در ساخت اپلیکیشن‌های وب با عملکرد بالا دارم و همیشه مشتاق یادگیری تکنولوژی‌های جدید هستم.",
    info: [
        {fieldName: "نام", fieldValue: "امیر حاتمی"},
        {fieldName: "تجربه", fieldValue: "۳ سال"},
        {fieldName: "ایمیل", fieldValue: "hatamiamir055@gmail.com"},
        {fieldName: "تلفن همراه", fieldValue: "09309242634"},
        {fieldName: "تلگرام", fieldValue: "amir_hatami0"},
        {fieldName: "گیت هاب", fieldValue: "amirhatami20"},
    ],
};


const AboutTab = () => (
    <div className="flex flex-col items-center lg:items-start text-white space-y-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
            {about.title}
        </h3>
        <p className="text-gray-300">{about.description || "توضیحی وارد نشده است."}</p>

        <ul className="grid sm:grid-cols-2 gap-4">
            {about.info.map(({fieldName, fieldValue}, index) => {
                const isPhone = fieldName.includes("تلفن");
                const isTelegram = fieldName === "تلگرام";
                const isGitHub = fieldName === "گیت هاب";

                let displayValue = <span className="text-lg">{fieldValue}</span>;

                if (isPhone) {
                    displayValue = (
                        <a href={`tel:${fieldValue}`}
                           className="text-lg text-green-300 underline hover:text-green-500 transition">
                            {fieldValue}
                        </a>
                    );
                } else if (isTelegram) {
                    displayValue = (
                        <a
                            href={`https://t.me/${fieldValue}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg text-green-300 underline hover:text-green-500 transition"
                        >
                            {fieldValue}@
                        </a>
                    );
                } else if (isGitHub) {
                    displayValue = (
                        <a
                            href={`https://github.com/${fieldValue}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg text-green-300 underline hover:text-green-500 transition"
                        >
                            github.com/{fieldValue}
                        </a>
                    );
                }

                return (
                    <li key={index}>
                        <strong className="text-lg text-white/70 font-dana-light ml-2">{fieldName}: </strong>
                        {displayValue}
                    </li>
                );
            })}

        </ul>
    </div>
);
export default AboutTab;
