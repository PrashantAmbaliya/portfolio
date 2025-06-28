"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/common/lib/hooks";
import SubmitBtn from "./_components/submit-btn";
import SectionHeading from "@/common/components/shared/section-heading";
import toast from "react-hot-toast";
import { sendEmail } from "@/common/utils/actions/send-email";

export default function Contact() {
  const { ref } = useSectionInView("contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="flex w-full scroll-mt-12 flex-col items-center py-20 pb-30 text-center dark:bg-darkBg dark:text-white"
      initial={{
        opacity: 0.8,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Hit me up!</SectionHeading>
      <div className="w-[min(100%,38rem)] px-4">
        <p className="mb-20 mt-6 text-gray-700 dark:text-white/80">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:prashantambaliya226@gmail.com">
            prashantambaliya226@gmail.com
          </a>{" "}
          or through this form.
        </p>

        <form
          className="mt-10 flex flex-col dark:text-black"
          action={async (formData) => {
            const { error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          <input
            className="h-14 w-full rounded-[1rem] border border-[#c084fc7d] bg-white/10 px-4 text-black backdrop-blur-[6px] transition-[box-shadow] duration-\[450ms\] ease-\[cubic-bezier(0.6,0.6,0,1)\] dark:text-white placeholder:text-black/50 dark:placeholder:text-white/40 isolate overflow-hidden"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />

          <textarea
            className="my-3 h-52 w-full resize-none rounded-[1rem] border border-[#c084fc7d] bg-white/10 p-4 text-black backdrop-blur-[6px] transition-[box-shadow] duration-\[450ms\] ease-\[cubic-bezier(0.6,0.6,0,1)\] dark:text-white placeholder:text-black/50 dark:placeholder:text-white/40 isolate overflow-hidden"
            name="message"
            placeholder="Your message 👋"
            required
            maxLength={5000}
          />

          <div className="flex justify-center">
            <SubmitBtn />
          </div>
        </form>
      </div>
    </motion.section>
  );
}
