"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowUpLeft } from "react-icons/bs";

import ArrowNav from "@/components/layout/ArrowNav";
import { projects, stackIcons } from "@/data/projects";

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.4,
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      className="min-h-screen py-8 md:py-12"
    >
      <div className="container">
        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_#00ff99]" />

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Selected Projects
            </span>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                My <span className="text-accent">Work</span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50 md:text-base">
                A collection of full-stack applications and practical projects
                built with modern JavaScript technologies, focusing on
                performance, scalability, and security.
              </p>
            </div>

            <div className="w-fit rounded-2xl border border-white/10 bg-[#232329] px-5 py-4">
              <span className="block text-2xl font-bold text-accent">
                {String(projects.length).padStart(2, "0")}
              </span>

              <span className="text-xs text-white/40">Featured Projects</span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const previewStack = project.stack.slice(0, 5);

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.15 + index * 0.08,
                  duration: 0.45,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#232329] transition-all duration-500 hover:-translate-y-2 hover:border-accent/40"
              >
                {/* Image */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="block"
                  aria-label={`View ${project.name} project`}
                >
                  <div className="relative h-[230px] overflow-hidden bg-[#1b1b20]">
                    <Image
                      src={project.image}
                      alt={`${project.name} project preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#232329] via-black/10 to-transparent opacity-90" />

                    {/* Number */}
                    <span className="absolute left-4 top-4 text-4xl font-bold text-transparent text-outline">
                      {project.num}
                    </span>

                    {/* View icon */}
                    <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all duration-500 group-hover:bg-accent group-hover:text-primary">
                      <BsArrowUpLeft className="text-xl" />
                    </div>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <Image
                      src={project.icon}
                      alt=""
                      width={42}
                      height={42}
                      className="h-10 w-10 rounded-xl object-cover"
                      aria-hidden="true"
                    />

                    <h2 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-accent">
                      {project.name}
                    </h2>
                  </div>

                  <p className="mb-5 line-clamp-3 text-sm leading-6 text-white/50">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-5 flex flex-wrap gap-2">
                    {previewStack.map((technology) => {
                      const Icon = stackIcons[technology];

                      return (
                        <span
                          key={technology}
                          title={technology}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 bg-[#2b2b32] text-white/60 transition-colors duration-300 hover:border-accent/30 hover:text-accent"
                        >
                          <Icon className="text-lg" aria-hidden="true" />
                        </span>
                      );
                    })}

                    {project.stack.length > previewStack.length && (
                      <span className="flex h-9 items-center rounded-lg border border-white/5 bg-[#2b2b32] px-2.5 text-xs text-white/40">
                        +{project.stack.length - previewStack.length}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-sm font-medium text-accent transition-colors hover:text-white"
                    >
                      View Project
                    </Link>

                    <span className="text-xs text-white/30">
                      {project.stack.length} technologies
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <ArrowNav prevPath="/resume" nextPath="/services" />
    </motion.section>
  );
};

export default Projects;
