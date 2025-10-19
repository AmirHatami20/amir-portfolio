"use client"

import {AnimatePresence, motion} from "framer-motion";
import {usePathname} from "next/navigation";
import Stairs from "@/component/pageTransition/Stairs";

const StairTransition = () => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <div key={pathname}>
                <div className="h-screen w-screen fixed inset-0 pointer-events-none z-40 flex">
                    <Stairs/>
                </div>
            </div>

            <motion.div
                initial={{opacity: 1}}
                animate={{
                    opacity: 0,
                    transition: {delay: 1, duration: 0.3, ease: "easeInOut"},
                }}
            />
        </AnimatePresence>
    );
};

export default StairTransition;