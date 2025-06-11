"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
    return (
        <div className="w-full h-full relative flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.3, ease: "easeInOut" },
                }}
                className="relative w-[300px] h-[300px] lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden"
            >
                <Image
                    src="/assets/photo.png"
                    alt="me"
                    className="object-cover object-center"
                    quality={100}
                    fill
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/20 z-10" />

                {/* Animated Circle Border */}
                <motion.svg
                    viewBox="0 0 500 500"
                    className="absolute top-0 left-0 w-full h-full z-20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="250"
                        cy="250"
                        r="248"
                        stroke="#00ff99"
                        strokeWidth="4"
                        initial={{ strokeDasharray: "15 120 25 25" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [0, 360],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 15,
                            ease: "linear",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Photo
