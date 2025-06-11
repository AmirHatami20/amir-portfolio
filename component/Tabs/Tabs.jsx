"use client";

import {useState} from "react";

const Tabs = ({tabs}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full flex flex-col gap-6 lg:flex-row-reverse">
            <TabList>
                {tabs.map((tab, index) => (
                    <TabTrigger
                        key={index}
                        label={tab.label}
                        isActive={index === activeIndex}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </TabList>

            <TabContent>{tabs[activeIndex].content}</TabContent>
        </div>
    );
};

const TabList = ({children}) => (
    <div className="flex flex-col space-y-5 lg:min-w-[360px]">{children}</div>
);

const TabTrigger = ({label, isActive, onClick}) => (
    <button
        className={`inline-flex cursor-pointer items-center w-full bg-[#27272c] justify-center whitespace-nowrap rounded-lg p-3 ring-offset-white transition-all ${
            isActive
                ? "text-black bg-accent"
                : "text-white"
        }`}
        onClick={onClick}
    >
        {label}
    </button>
);

const TabContent = ({children}) => (
    <div className="text-sm md:text-base text-white">{children}</div>
);

export {Tabs, TabList, TabTrigger, TabContent};
