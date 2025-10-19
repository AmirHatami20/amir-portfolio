import {motion} from "framer-motion";
import React from "react";

const TOTAL_STEPS = 6;

const Stairs = React.memo(() => {
    return (
        <div className="w-full h-screen flex fixed inset-0 z-50 pointer-events-none">
            {Array.from({length: TOTAL_STEPS}).map((_, index) => {
                const delay = (TOTAL_STEPS - index - 1) * 0.1;

                return (
                    <motion.div
                        key={index}
                        className="flex-1 h-full bg-white relative"
                        variants={{
                            initial: {top: "0%"},
                            animate: {top: "100%"},
                            exit: {top: ["100%", "0%"]},
                        }}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.35,
                            ease: [0.43, 0.13, 0.23, 0.96],
                            delay,
                        }}
                    />
                );
            })}
        </div>
    );
});

export default Stairs;
