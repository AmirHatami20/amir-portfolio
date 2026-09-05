import { softSkills } from "@/data/soft-skills";

const SoftSkillsTab = () => {
  return (
    <div className="tabs-wrapper w-full">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_#00ff99]" />

          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Professional Skills
          </span>
        </div>

        <h2 className="text-3xl font-bold text-white lg:text-4xl">
          My <span className="text-accent">Soft Skills</span>
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/50 lg:text-base">
          Personal and professional qualities that help me communicate
          effectively, work with teams, solve problems, and continuously improve
          my development skills.
        </p>
      </div>

      {/* Skills */}
      <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {softSkills.map(({ name, Icon }) => (
          <div
            key={name}
            className="group relative flex min-h-35 flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-[#232329] px-3 py-5 text-center transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-[#28282f]"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-accent/5 blur-2xl transition-all duration-500 group-hover:bg-accent/20" />

            {/* Icon */}
            <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#2b2b32] transition-all duration-500 group-hover:bg-accent/10">
              <Icon
                className="text-4xl text-white/80 transition-all duration-500 group-hover:scale-110 group-hover:text-accent"
                aria-hidden="true"
              />
            </div>

            {/* Name */}
            <span className="relative text-sm font-medium text-white/70 transition-colors duration-500 group-hover:text-white">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftSkillsTab;
