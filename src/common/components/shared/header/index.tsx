"use client";

import { links } from "@/common/lib/data";
import { smoothScrollTo } from "@/common/lib/utils";
import { useActiveSectionContext } from "@/common/stores/active-section";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="relative z-[99]">
      <motion.div
        className="fixed left-1/2 top-0 h-[3.2rem] w-full rounded-none md:border bg-[#03001417] md:border-[#f4f3ee] md:border-opacity-40 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6  sm:h-[3.25rem] md:w-[31.5rem] md:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 md:left-1/2 md:-translate-x-1/2">
        <ul className="flex w-[22rem] flex-nowrap items-center justify-center gap-y-2 text-[0.75rem] font-medium transition-colors sm:w-[initial] sm:flex-nowrap sm:gap-3 sm:text-[0.9rem]">
          {links.map((link) => (
            <motion.li
              className="relative flex h-3/4 items-center justify-center text-black dark:text-white"
              key={link.id}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className="flex w-full items-center justify-center px-2 py-2 uppercase transition sm:px-3 sm:py-3"
                href={link.id}
                onClick={(e) => {
                  smoothScrollTo({ e, id: link.id });
                  setActiveSection(link.id);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.id === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full"
                    style={{
                      backgroundImage: 'linear-gradient(130deg, #c084fc, #a855f7, #9333ea)',
                    }}
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
