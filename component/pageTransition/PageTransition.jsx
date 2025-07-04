"use client";

import {AnimatePresence, motion} from "framer-motion";
import {usePathname} from "next/navigation";

const PageTransition = ({children}) => {
    const pathname = usePathname();

    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div
                    initial={{opacity: 1}}
                    animate={{
                        opacity: 0,
                        transition: {delay: 1, duration: 0.3, ease: "easeInOut"},
                    }}
                    className="h-screen w-screen fixed bg-primary top-6 pointer-events-none"
                />
                {children}
            </div>
        </AnimatePresence>
    );
};

export default PageTransition;