"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowLeft, BsArrowUpLeft, BsGithub, BsCheck2 } from "react-icons/bs";

import { stackIcons } from "@/data/projects";
import type { Project } from "@/types/project";

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-8 md:py-12"
    >
      <div className="container">
        {/* Back */}
        <Link
          href="/work"
          className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-accent"
        >
          <BsArrowLeft />
          Back to Projects
        </Link>

        {/* Hero */}
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#1b1b20]"
          >
            <div className="relative aspect-video w-full">
              <Image
                src={project.image}
                alt={`${project.name} project preview`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-li-to-t from-black/50 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-md">
              <span className="text-sm text-white/70">
                Project {project.num}
              </span>
            </div>
          </motion.div>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col"
          >
            <span className="mb-3 text-6xl font-bold leading-none text-transparent text-outline md:text-8xl">
              {project.num}
            </span>

            <div className="mb-5 flex items-center gap-4">
              <Image
                src={project.icon}
                alt={`${project.name} icon`}
                width={58}
                height={58}
                className="h-12 w-12 rounded-2xl object-cover md:h-14 md:w-14"
              />

              <h1 className="text-3xl font-bold text-white md:text-5xl">
                {project.name}
              </h1>
            </div>

            <p className="leading-7 text-white/60">{project.description}</p>

            {/* Actions */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:scale-105 hover:bg-white"
              >
                Live Project
                <BsArrowUpLeft />
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#232329] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-accent hover:text-accent"
              >
                Source Code
                <BsGithub />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* Project Information */}
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-[#232329] p-6"
          >
            <div className="mb-6">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                What I Built
              </span>

              <h2 className="mt-2 text-2xl font-bold text-white">
                Key Features
              </h2>
            </div>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-[#2b2b32] px-4 py-3 text-sm text-white/70 transition-colors duration-300 hover:border-accent/20 hover:text-white"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <BsCheck2 />
                  </span>

                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Stack */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-[#232329] p-6"
          >
            <div className="mb-6">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Technologies
              </span>

              <h2 className="mt-2 text-2xl font-bold text-white">Tech Stack</h2>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {project.stack.map((technology) => {
                const Icon = stackIcons[technology];

                return (
                  <div
                    key={technology}
                    className="group flex items-center gap-3 rounded-xl border border-white/5 bg-[#2b2b32] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-accent/5"
                  >
                    <Icon
                      className="text-2xl text-white/70 transition-colors duration-300 group-hover:text-accent"
                      aria-hidden="true"
                    />

                    <span className="text-xs text-white/60 transition-colors duration-300 group-hover:text-white">
                      {technology}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-8 overflow-hidden rounded-3xl border border-accent/10 bg-[#232329] p-6 md:p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                More Projects
              </span>

              <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                Want to see more of my work?
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/50">
                Explore the rest of my projects and see how I work with
                different technologies and architectures.
              </p>
            </div>

            <Link
              href="/work"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:scale-105 hover:bg-white"
            >
              Explore Projects
              <BsArrowUpLeft />
            </Link>
          </div>
        </section>
      </div>
    </motion.main>
  );
};

export default ProjectDetails;
