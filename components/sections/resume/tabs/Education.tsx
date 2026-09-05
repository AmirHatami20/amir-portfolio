import { education } from "@/data/educations";

const EducationTab = () => {
  return (
    <div className="tabs-wrapper w-full">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_#00ff99]" />

          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Academic Background
          </span>
        </div>

        <h2 className="text-3xl font-bold text-white lg:text-4xl">
          My <span className="text-accent">Education</span>
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-white/50 lg:text-base">
          My academic journey has helped me develop a strong foundation in
          software engineering, programming, logical thinking, and
          problem-solving, complementing my practical experience in software
          development.
        </p>
      </div>

      {/* Education Cards */}
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
        {education.map(({ title, place, year, description }) => (
          <article
            key={`${title}-${place}`}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#232329] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-[#28282f]"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/5 blur-3xl transition-all duration-500 group-hover:bg-accent/15" />

            <div className="relative flex flex-col gap-4">
              {/* Year */}
              <div className="flex items-center justify-between">
                <span className="inline-flex w-fit items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {year}
                </span>

                <span className="text-2xl font-bold text-white/5 transition-colors duration-500 group-hover:text-accent/10">
                  EDU
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-lg font-semibold leading-7 text-white transition-colors duration-300 group-hover:text-accent lg:text-xl">
                  {title}
                </h3>

                <p className="mt-1 text-sm font-medium text-white/40">
                  {place}
                </p>
              </div>

              {/* Description */}
              <p className="border-t border-white/10 pt-4 text-sm leading-6 text-white/60 lg:text-[15px]">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default EducationTab;
