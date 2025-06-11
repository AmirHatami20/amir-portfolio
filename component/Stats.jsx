"use client"

import CountUp from "react-countup";
import toPersianNumber from "@/utils/toPersianNumber";

const stats = [
    {num: 3, text: "سال تجربه برنامه نویسی"},
    {num: 15, text: "پروژه تمام شده"},
    {num: 12, text: "مهارت"},
    {num: 8, text: "مهارت نرم"},
];

const Stats = () => {
    return (
        <section className="container">
            <div
                className="flex flex-wrap gap-6 max-w-[80vw] mx-auto items-center justify-center lg:justify-between text-white">
                {stats.map((item, index) => (
                    <div className="flex items-center gap-x-3" key={index}>
                        <CountUp
                            end={item.num}
                            duration={3}
                            delay={1}
                            formattingFn={(val) => toPersianNumber(Math.floor(val))}
                            className="text-4xl xl:text-6xl font-dana-bold"
                        />
                        <p
                            className={`text-lg leading-6 font-dana-demiBold ${item.text.length > 10 ? "max-w-[100px]" : "max-w-[150px]"}`}
                        >
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
