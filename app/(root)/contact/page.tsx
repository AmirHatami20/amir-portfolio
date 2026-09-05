"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";

import Input from "@/components/ui/Input";
import CustomSelect from "@/components/ui/CustomSelect";
import TextArea from "@/components/ui/TextArea";
import Button from "@/components/ui/Button";
import ArrowNav from "@/components/layout/ArrowNav";

import { contactInfo, serviceOptions } from "@/data/contact";

import type { ContactFormData } from "@/types/contact";

const Contact = () => {
  const [data, setData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    selectedService: "",
    description: "",
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (value: string) => {
    setData((prev) => ({
      ...prev,
      selectedService: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Contact form submitted:", data);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-4"
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-[30px]">
          {/* Form */}
          <div className="lg:w-[54%] xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-5 lg:p-7 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-2xl lg:text-4xl text-accent">
                Let&apos;s work together.
              </h3>

              <p className="text-sm lg:text-base text-white/60">
                If you&apos;re looking to collaborate on a creative, challenging
                project or bring an idea to life, I&apos;d be happy to work with
                you. Let&apos;s build something great together.
              </p>

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstName"
                  value={data.firstName}
                  onChange={handleInputChange}
                  placeholder="First name..."
                />

                <Input
                  name="lastName"
                  value={data.lastName}
                  onChange={handleInputChange}
                  placeholder="Last name..."
                />

                <Input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleInputChange}
                  placeholder="Email..."
                />

                <Input
                  type="tel"
                  name="phone"
                  value={data.phone}
                  onChange={handleInputChange}
                  placeholder="Phone number..."
                />
              </div>

              {/* Service */}
              <CustomSelect
                options={serviceOptions}
                value={data.selectedService}
                onChange={handleServiceChange}
                placeholder="Select a service..."
              />

              {/* Message */}
              <TextArea
                name="description"
                value={data.description}
                onChange={handleInputChange}
                placeholder="Tell me about your project..."
              />

              {/* Submit */}
              <Button type="submit" className="lg:max-w-40 lg:ml-auto">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex items-center lg:justify-center lg:order-none mb-8 lg:mb-0">
            <ul className="flex flex-col gap-10">
              {contactInfo.map((item) => (
                <li key={item.title} className="flex items-center gap-6">
                  <div className="w-14 h-14 lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[22px]" aria-hidden="true">
                      <item.icon />
                    </div>
                  </div>

                  <div className="flex-1 gap-y-2">
                    <p className="text-white/60">{item.title}</p>

                    <h3 className="text-sm lg:text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ArrowNav prevPath="/projects" nextPath="/" />
    </motion.section>
  );
};

export default Contact;
