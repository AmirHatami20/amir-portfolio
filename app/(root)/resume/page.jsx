"use client";

import {Tabs} from "@/component/Tabs/Tabs";
import {motion} from 'framer-motion';
import AboutTab from "@/component/Tabs/AboutTab";
import EducationTab from "@/component/Tabs/EducationTab";
import SoftSkillsTab from "@/component/Tabs/SoftSkillsTab";
import SkillsTab from "@/component/Tabs/SkillsTab";
import ArrowNav from "@/component/ArrowNav";
import CoursesTab from "@/component/Tabs/CoursesTab";

const resume = () => {
    return (
        <section className="py-4">
            <motion.div
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: {delay: 2, duration: 0.3, ease: "easeIn"}
                }}
                className="container"
            >
                <Tabs
                    tabs={[
                        {label: "مهارت‌ها", content: <SkillsTab/>},
                        {label: "مهارت‌های نرم", content: <SoftSkillsTab/>},
                        {label: "دوره های گذرانده", content: <CoursesTab/>},
                        {label: "تحصیلات", content: <EducationTab/>},
                        {label: "درباره من", content: <AboutTab/>},
                    ]}
                />
                <ArrowNav prevPath="/" nextPath="/work"/>
            </motion.div>
        </section>
    );
};

export default resume;