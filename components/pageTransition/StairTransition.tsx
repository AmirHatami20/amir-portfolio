"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "@/components/pageTransition/Stairs";

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="h-screen w-screen fixed inset-0 pointer-events-none z-40 flex">
          <Stairs />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;
