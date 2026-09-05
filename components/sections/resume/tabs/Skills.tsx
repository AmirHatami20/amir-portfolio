import { skillCategories } from "@/data/skills";
import type { Skill } from "@/types/skill";

interface SkillsListProps {
  skills: Skill[];
  categoryName: string;
  index: number;
}

const SkillsList = ({ skills, categoryName, index }: SkillsListProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#1f1f25] p-5 transition-all duration-500 hover:border-accent/40 hover:bg-[#222229]">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-accent/5 blur-3xl transition-all duration-500 group-hover:bg-accent/15" />

      {/* Category Header */}
      <div className="relative mb-5 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-sm font-bold text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>

          <h3 className="text-base font-semibold text-white lg:text-lg">
            {categoryName}
          </h3>
        </div>

        <span className="rounded-full border border-white/10 bg-[#292930] px-2.5 py-1 text-xs text-white/50">
          {skills.length} Skills
        </span>
      </div>

      {/* Skills */}
      <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3">
        {skills.map(({ name, Icon }) => (
          <div
            key={name}
            className="group/skill flex min-h-22.5 flex-col items-center justify-center gap-2 rounded-xl border border-white/5 bg-[#28282f] px-2 py-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-accent/10"
          >
            <Icon
              className="text-[30px] text-white/80 transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:text-accent"
              aria-hidden="true"
            />

            <span className="text-xs leading-4 text-white/70 transition-colors duration-300 group-hover/skill:text-white">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsTab = () => {
  const totalSkills = skillCategories.reduce(
    (total, category) => total + category.skills.length,
    0,
  );

  return (
    <div className="tabs-wrapper w-full">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_#00ff99]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Technical Skills
              </span>
            </div>

            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              My <span className="text-accent">Skills</span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/50 lg:text-base">
              Technologies and tools I use to build modern, scalable, and secure
              web applications.
            </p>
          </div>

          {/* Total Skills */}
          <div className="flex w-fit items-center gap-3 rounded-xl border border-white/10 bg-[#232329] px-4 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <span className="text-lg font-bold">{totalSkills}</span>
            </div>

            <div>
              <p className="text-xs text-white/40">Technologies</p>
              <p className="text-sm font-medium text-white">In my toolkit</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {skillCategories.map((category, index) => (
          <SkillsList
            key={category.name}
            categoryName={category.name}
            skills={category.skills}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsTab;
