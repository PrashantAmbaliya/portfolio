"use client";

import "next-cloudinary/dist/cld-video-player.css";
import SectionDivider from "@/common/components/shared/section-divider";
import TextAnimation from "./_components/text-animation";
import { useSectionInView } from "@/common/lib/hooks";
import { useActiveSectionContext } from "@/common/stores/active-section";
import { smoothScrollTo } from "@/common/lib/utils";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import StarsCanvas from "./_components/StarBackground";

export default function Hero() {
  const { ref } = useSectionInView("home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <>
      <section
        className="relative flex h-screen w-full scroll-mt-36 flex-col items-center justify-center"
        id="home"
        ref={ref}
      >
        <div
          className={
            "absolute left-0 top-0 h-screen w-full "
          }
        ></div>
        {/* <StarsCanvas /> */}

        <video
          width="480"
          height="720"
          preload="none"
          autoPlay
          crossOrigin="anonymous"
          muted
          loop
          className="rotate-180 absolute top-[-348px] h-full w-full left-0 object-cover z-[-2]"
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>

        <div className="container flex flex-col items-start justify-center tracking-wide text-black dark:text-white">
          <div className="container relative flex h-full w-full flex-col items-center">
            <div className="h-72 w-[280px] text-center text-[2rem] font-extrabold sm:w-[520px] md:w-[700px] lg:mb-5 lg:w-[920px] lg:text-[3rem]">
              <motion.span
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
                className="mb-10 text-start font-extrabold"
              >
                Hey!
              </motion.span>
              <br />
              <TextAnimation delay={1} baseText={`I'm Prashant`} />
            </div>
            <motion.div
              className="w-92 flex flex-col items-center justify-center gap-3 px-4 text-sm font-medium md:mt-12 md:flex-row lg:text-lg"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
              }}
            >
              <a
                className="group flex w-64 cursor-pointer items-center justify-center gap-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 px-7 py-3 text-white outline-none transition-all duration-300 hover:bg-white/20 hover:border-white/30 shadow-lg sm:w-auto"
                onClick={(e) => {
                  smoothScrollTo({ e, id: "contact" });
                  setActiveSection("contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                <span>Contact me here</span>
              </a>

              <a
                className="group flex w-64 cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-black outline-none transition-all duration-300 hover:backdrop-blur-md hover:bg-white/20 hover:border hover:border-white/30 hover:text-white shadow-lg sm:w-auto"
                href="/Prashant_Ambaliya_Resume.pdf"
                download
              >
                <span>Download CV</span>
              </a>

              <div className="flex gap-2">
                <a
                  className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white p-2 text-black transition-all duration-300 hover:backdrop-blur-md hover:bg-white/20 hover:border hover:border-white/30 hover:text-white shadow-lg"
                  href="https://www.linkedin.com/in/prashant-a-889590228/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a
                  className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white p-2 text-gray-700 transition-all duration-300 hover:backdrop-blur-md hover:bg-white/20 hover:border hover:border-white/30 hover:text-white shadow-lg"
                  href="https://github.com/PrashantAmbaliya"
                  target="_blank"
                >
                  <Image
                    width={25}
                    height={25}
                    src={"/svgs/github.svg"}
                    alt="github icon"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </>
  );
}
