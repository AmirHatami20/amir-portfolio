"use client";

import { Tabs } from "@/components/sections/resume/Tabs";
import { motion } from "framer-motion";
import AboutTab from "@/components/sections/resume/tabs/About";
import EducationTab from "@/components/sections/resume/tabs/Education";
import SoftSkillsTab from "@/components/sections/resume/tabs/SoftSkills";
import SkillsTab from "@/components/sections/resume/tabs/Skills";
import ArrowNav from "@/components/layout/ArrowNav";
import CoursesTab from "@/components/sections/resume/tabs/Courses";

const resume = () => {
  return (
    <section className="py-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.3, ease: "easeIn" },
        }}
        className="container"
      >
        <Tabs
          tabs={[
            { label: "Skills", content: <SkillsTab /> },
            { label: "Soft Skills", content: <SoftSkillsTab /> },
            { label: "Courses", content: <CoursesTab /> },
            { label: "Educations", content: <EducationTab /> },
            { label: "About Me", content: <AboutTab /> },
          ]}
        />
        <ArrowNav prevPath="/" nextPath="/projects" />
      </motion.div>
    </section>
  );
};

export default resume;
