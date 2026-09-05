"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowDownLeft } from "react-icons/bs";

import ArrowNav from "@/components/layout/ArrowNav";

import { services } from "@/data/services";

const Services = () => {
  return (
    <section className="py-6 lg:py-4">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2,
              duration: 0.3,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {services.map((service) => (
            <div
              key={service.num}
              className="flex flex-col justify-center gap-3 lg:gap-5 group border border-white/20 hover:border-accent/40 transition-colors duration-500 p-4 rounded-2xl"
            >
              {/* Top */}
              <div className="w-full flex justify-between items-center">
                <span className="text-4xl lg:text-5xl font-bold text-outline text-transparent transition-colors duration-500">
                  {service.num}
                </span>

                <Link
                  href="/contact"
                  aria-label={`Contact us about ${service.title}`}
                  className="w-10 h-10 lg:w-[70px] lg:h-[70px] rounded-full bg-white group-hover:bg-accent transition-all flex justify-center items-center hover:rotate-45"
                >
                  <BsArrowDownLeft
                    className="text-xl lg:text-3xl text-primary"
                    aria-hidden="true"
                  />
                </Link>
              </div>

              {/* Title */}
              <h2 className="text-lg lg:text-3xl leading-7 group-hover:text-accent transition-all">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-sm leading-6 lg:leading-7 lg:text-base text-white/70">
                {service.description}
              </p>
            </div>
          ))}

          <ArrowNav prevPath="/projects" nextPath="/contact" />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
