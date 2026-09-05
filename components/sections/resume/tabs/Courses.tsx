import { courses } from "@/data/courses";

const Courses = () => {
  return (
    <div className="tabs-wrapper w-full">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_#00ff99]" />

          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Learning Journey
          </span>
        </div>

        <h2 className="text-3xl font-bold text-white lg:text-4xl">
          Courses & <span className="text-accent">Learning</span>
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-white/50 lg:text-base">
          My learning journey goes beyond formal education. I continuously
          improve my technical skills through professional courses, practical
          projects, and modern development resources.
        </p>
      </div>

      {/* Courses */}
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {courses.map(({ title, company, link, icon: Icon }) => (
          <article
            key={`${company}-${title}`}
            className="group relative flex min-h-52.5 flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#232329] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-[#28282f]"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/5 blur-3xl transition-all duration-500 group-hover:bg-accent/20" />

            <div className="relative">
              {/* Icon & Company */}
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2b2b32] transition-all duration-500 group-hover:bg-accent/10">
                  <Icon
                    className="text-3xl text-accent transition-transform duration-500 group-hover:scale-110"
                    aria-hidden="true"
                  />
                </div>

                <span className="rounded-full border border-white/10 bg-[#292930] px-3 py-1 text-xs text-white/50">
                  {company}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold leading-6 text-white transition-colors duration-300 group-hover:text-accent lg:text-lg">
                {title}
              </h3>
            </div>

            {/* Link */}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-6 inline-flex w-fit items-center justify-center rounded-full border border-accent/60 px-4 py-2 text-sm font-medium text-accent transition-all duration-300 hover:bg-accent hover:text-primary"
            >
              View Course
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Courses;
