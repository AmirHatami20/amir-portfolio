"use client";

import {useState} from "react";

export const Tabs = ({tabs}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full flex flex-col gap-6 lg:flex-row-reverse">
            <div className="flex flex-col lg:mt-18 space-y-5 lg:min-w-[360px]">
                {tabs.map((tab, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <button
                            className={`inline-flex cursor-pointer items-center w-full justify-center whitespace-nowrap rounded-lg p-3 ring-offset-white transition-all ${
                                isActive ? "text-black bg-accent" : "text-white bg-[#27272c]"
                            }`}
                            key={index}
                            onClick={() => setActiveIndex(index)}
                        >
                            {tab.label}
                        </button>
                    )
                })}
            </div>

            <div className="text-sm md:text-base text-white">{tabs[activeIndex].content}</div>
        </div>
    );
};