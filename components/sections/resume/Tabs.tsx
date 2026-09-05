"use client";

import { useState } from "react";
import type { Tab } from "@/types/tab";

interface TabsProps {
  tabs: Tab[];
}

export const Tabs = ({ tabs }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  if (tabs.length === 0) {
    return null;
  }

  return (
    <div className="w-full flex flex-col gap-6 lg:flex-row-reverse">
      <div className="flex flex-col lg:mt-18 space-y-5 lg:min-w-90">
        {tabs.map((tab, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={tab.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`inline-flex cursor-pointer items-center w-full justify-center whitespace-nowrap rounded-lg p-3 ring-offset-white transition-all ${
                isActive ? "text-black bg-accent" : "text-white bg-[#27272c]"
              }`}
              aria-selected={isActive}
              role="tab"
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="text-sm md:text-base text-white" role="tabpanel">
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};
