"use client";

import {useState} from "react";
import {FaAngleDown} from "react-icons/fa6";

const CustomSelect = ({options, value, placeholder = "انتخاب سرویس...", onChange}) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(
        options.find(opt => opt.value === value) || null
    );

    const handleSelect = (option) => {
        setSelected(option);
        setOpen(false);
        onChange?.(option.value);
    };

    return (
        <div className="relative w-full">
            {/* Trigger */}
            <div
                onClick={() => setOpen(prev => !prev)}
                className="flex items-center cursor-pointer w-full h-12 rounded-md border border-white/10 focus:border-accent font-dana-light bg-primary px-4 py-5 text-base justify-between text-white/60"
            >
                <span>{selected?.label || placeholder}</span>
                <FaAngleDown
                    className={`transition duration-500 ${open ? "rotate-180" : ""}`}
                />
            </div>

            {open && (
                <ul className="absolute top-full left-0 z-10 w-full mt-1 border border-accent bg-primary shadow-md rounded-md">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            onClick={() => handleSelect(option)}
                            className={`px-4 py-2 cursor-pointer hover:bg-accent hover:text-primary ${
                                selected?.value === option.value ? "bg-accent text-primary font-medium" : ""
                            }`}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;
