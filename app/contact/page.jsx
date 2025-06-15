"use client"


import {FaEnvelope, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";

import {motion} from "framer-motion";
import Input from "@/component/ui/Input";
import CustomSelect from "@/component/ui/CustomSelect";
import {useState} from "react";
import TextArea from "@/component/ui/TextArea";
import Button from "@/component/ui/Button";
import ArrowNav from "@/component/ArrowNav";

const info = [
    {
        icon: <FaPhoneAlt/>,
        title: "تلفن",
        description: "09309242634",
    },
    {
        icon: <FaEnvelope/>,
        title: "ایمیل",
        description: "hatamiamir055@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt/>,
        title: "آدرس",
        description: "تهران / شهرری",
    },
]

const contact = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        selectedService: "",
        description: "",
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleServiceChange = (value) => {
        setData((prev) => ({
            ...prev,
            selectedService: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(data);

    }

    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 2, duration: 0.4, ease: "easeIn"},
            }}
            className="py-4"
        >
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center gap-[30px]">
                    {/* Form */}
                    <div className="lg:w-[54%] xl:order-none">
                        <form
                            className="flex flex-col gap-6 p-5 lg:p-7 bg-[#27272c] rounded-xl"
                            onSubmit={handleSubmit}
                        >
                            <h3 className="text-2xl lg:text-4xl text-accent">بیایید همکاری کنیم.</h3>
                            <p className="text-sm lg:text-base text-white/60">
                                اگر به دنبال همکاری در پروژه‌ای خلاقانه، چالش‌برانگیز یا توسعه یک ایده هستید، خوشحال
                                می‌شوم در کنارتان باشم. بیایید با هم کاری متفاوت خلق کنیم.
                            </p>
                            {/* Inputs */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    name="firstName"
                                    onChange={handleInputChange}
                                    value={data.firstName}
                                    placeholder="نام..."
                                />
                                <Input
                                    name="lastName"
                                    onChange={handleInputChange}
                                    value={data.lastName}
                                    placeholder="نام خانوادگی..."
                                />
                                <Input
                                    type="email"
                                    onChange={handleInputChange}
                                    value={data.email} name="email"
                                    placeholder="ایمیل..."
                                />
                                <Input
                                    name="phone"
                                    onChange={handleInputChange}
                                    value={data.phone}
                                    placeholder="تلفن همراه..."
                                />
                            </div>
                            {/* Select */}
                            <CustomSelect
                                options={[
                                    {label: "فرانت اند", value: "frontend"},
                                    {label: "بک اند", value: "backend"},
                                    {label: "فول استک", value: "fullStack"},
                                    {label: "همکاری تیمی", value: "workTogether"},
                                ]}
                                value={data.selectedService}
                                onChange={handleServiceChange}
                            />
                            {/* Text Area */}
                            <TextArea
                                name="description"
                                placeholder="متن تان را وارد نمایید..."
                                value={data.description}
                                onChange={handleInputChange}
                            />
                            {/* Submit btn */}
                            <Button className="lg:max-w-40 lg:mr-auto">
                                ارسال
                            </Button>
                        </form>
                    </div>
                    {/* Info */}
                    <div className="flex items-center lg:justify-center lg:order-none mb-8 lg:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-6"
                                >
                                    <div
                                        className="w-14 h-14 lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center"
                                    >
                                        <div className="text-[22px]">{item.icon}</div>
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
            <ArrowNav prevPath="/work" nextPath="/" />
        </motion.section>
    );
};

export default contact;