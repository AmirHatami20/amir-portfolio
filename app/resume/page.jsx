"use client";

import {Tabs} from "@/component/Tabs/Tabs";
import AboutTab from "@/component/Tabs/AboutTab";
import EducationTab from "@/component/Tabs/EducationTab";
import SoftSkillsTab from "@/component/Tabs/SoftSkillsTab";
import SkillsTab from "@/component/Tabs/SkillsTab";
import ArrowNav from "@/component/ArrowNav";
import CoursesTab from "@/component/Tabs/CoursesTab";


const resume = () => {
    return (
        <section className="container py-6">
            <Tabs
                tabs={[
                    {label: "مهارت‌ها", content: <SkillsTab/>},
                    {label: "مهارت‌های نرم", content: <SoftSkillsTab/>},
                    {label: "دوره های گذرانده", content: <CoursesTab/>},
                    {label: "تحصیلات", content: <EducationTab/>},
                    {label: "درباره من", content: <AboutTab/>},
                ]}
            />
            <ArrowNav prevPath="/" nextPath="/services" />
        </section>
    );
};

export default resume;