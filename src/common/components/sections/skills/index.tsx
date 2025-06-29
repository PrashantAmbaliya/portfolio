"use client";
import React, { useEffect, useRef } from "react";
import { useSectionInView } from "@/common/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/common/components/shared/section-heading";
import SectionDivider from "@/common/components/shared/section-divider";
import Lenis from 'lenis';

// Import your skill data
import { Skill_data, Frontend_skill, Backend_skill, Full_stack, Other_skill } from "@/common/constants/index";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

// Combine all skills into one array
const allSkills = [
  ...Skill_data,
  ...Frontend_skill,
  ...Backend_skill,
  ...Full_stack,
  ...Other_skill
];

// Split skills data into chunks for different slides
const skillChunks = [
  allSkills.slice(0, Math.ceil(allSkills.length / 3)),
  allSkills.slice(Math.ceil(allSkills.length / 3), Math.ceil(allSkills.length * 2 / 3)),
  allSkills.slice(Math.ceil(allSkills.length * 2 / 3))
];

// Slide component for the scrolling effect
const Slide = ({ skills, direction, left, progress }: {
  skills: typeof allSkills;
  direction: 'left' | 'right';
  left: string;
  progress: any;
}) => {
  const directionMultiplier = direction === 'left' ? -1 : 1;
  const translateX = useTransform(progress, [0, 1], [150 * directionMultiplier, -150 * directionMultiplier]);
  
  return (
    <motion.div 
      style={{ x: translateX, left }} 
      className="relative flex whitespace-nowrap py-4"
    >
      <SkillsRow skills={skills} />
      <SkillsRow skills={skills} />
      <SkillsRow skills={skills} />
    </motion.div>
  );
};

// Individual skills row component
const SkillsRow = ({ skills }: { skills: typeof allSkills }) => {
  return (
    <div className="flex gap-4 px-5 items-center">
      {skills.map((skill, index) => (
        <motion.div
          key={`${skill.skill_name}-${index}`}
          className="borderBlack flex items-center justify-center rounded-xl px-3 py-2 lg:px-5 lg:py-3 whitespace-nowrap"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={index}
        >
          <Image
            src={skill.Image}
            alt={skill.skill_name}
            width={20}
            height={20}
            className="mr-1.5 lg:mr-2 inline h-5 w-5 lg:h-6 lg:w-6"
          />
          <span className="text-sm lg:text-lg text-gray-800 dark:text-white/80">{skill.skill_name}</span>
        </motion.div>
      ))}
    </div>
  );
};

// Skills category component for traditional layout
const SkillCategory = ({ title, skills }: { title: string; skills: typeof allSkills }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-white/90">{title}</h3>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.skill_name}
            // className="Welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9] cursor-pointer "
            className="borderBlack flex items-center justify-center rounded-xl bg-gray-200 px-5 py-3 cursor-pointer dark:bg-white/10 dark:text-white/80  whitespace-nowrap"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <Image
              src={skill.Image}
              alt={skill.skill_name}
              width={20}
              height={20}
              className="mr-1.5 sm:mr-2 inline h-5 w-5 sm:h-6 sm:w-6"
            />
            <span className="text-sm sm:text-lg dark:text-white/80">
              {skill.skill_name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function Skills() {
  const { ref } = useSectionInView("skills");
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="flex w-full flex-col items-center justify-center text-center dark:bg-darkBg dark:text-white overflow-hidden"
    >
      <SectionHeading>My skills</SectionHeading>
      
      {/* Traditional skills grid for smaller screens - organized by categories */}
      <div className="block lg:hidden max-w-4xl mx-auto px-4">
        <SkillCategory title="Frontend" skills={Frontend_skill} />
        <SkillCategory title="Backend" skills={[...Backend_skill, ...Other_skill]} />
        <SkillCategory title="Other" skills={Full_stack} />
      </div>

      {/* Scrolling animation for larger screens */}
      <div className="hidden lg:block w-full" ref={container}>
        <div className="py-12">
          <Slide 
            skills={skillChunks[0]} 
            direction="left" 
            left="-10%" 
            progress={scrollYProgress} 
          />
          <Slide 
            skills={skillChunks[1]} 
            direction="right" 
            left="-5%" 
            progress={scrollYProgress} 
          />
          <Slide 
            skills={skillChunks[2]} 
            direction="left" 
            left="-15%" 
            progress={scrollYProgress} 
          />
        </div>
      </div>

      <div 
      
      className="flex w-full justify-center dark:bg-darkBg"
      >
        <SectionDivider />
      </div>
    </section>
  );
}