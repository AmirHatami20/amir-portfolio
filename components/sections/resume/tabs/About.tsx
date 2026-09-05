import type { ReactNode } from "react";
import { about } from "@/data/about";

const AboutTab = () => {
  return (
    <div className="tabs-wrapper w-full">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_#00ff99]" />

          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Personal Information
          </span>
        </div>

        <h2 className="text-3xl font-bold text-white lg:text-4xl">
          About <span className="text-accent">Me</span>
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-white/50 lg:text-base">
          {about.description || "No description provided."}
        </p>
      </div>

      {/* Information */}
      <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        {about.info.map(({ fieldName, fieldValue }) => {
          const isPhone = fieldName === "Phone";
          const isTelegram = fieldName === "Telegram";
          const isGitHub = fieldName === "GitHub";
          const isEmail = fieldName === "Email";

          let displayValue: ReactNode = (
            <span className="text-sm text-white lg:text-base">
              {fieldValue}
            </span>
          );

          if (isPhone) {
            displayValue = (
              <a
                href={`tel:${fieldValue}`}
                className="text-sm text-accent transition-colors duration-300 hover:text-white lg:text-base"
              >
                {fieldValue}
              </a>
            );
          }

          if (isEmail) {
            displayValue = (
              <a
                href={`mailto:${fieldValue}`}
                className="break-all text-sm text-accent transition-colors duration-300 hover:text-white lg:text-base"
              >
                {fieldValue}
              </a>
            );
          }

          if (isTelegram) {
            displayValue = (
              <a
                href={`https://t.me/${fieldValue}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent transition-colors duration-300 hover:text-white lg:text-base"
              >
                @{fieldValue}
              </a>
            );
          }

          if (isGitHub) {
            displayValue = (
              <a
                href={`https://github.com/${fieldValue}`}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-sm text-accent transition-colors duration-300 hover:text-white lg:text-base"
              >
                github.com/{fieldValue}
              </a>
            );
          }

          return (
            <li
              key={fieldName}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#232329] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-[#28282f]"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-accent/5 blur-2xl transition-all duration-500 group-hover:bg-accent/20" />

              <div className="relative flex min-h-17.5 flex-col justify-center gap-1.5">
                <span className="text-xs font-medium uppercase tracking-wider text-white/40">
                  {fieldName}
                </span>

                {displayValue}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AboutTab;
