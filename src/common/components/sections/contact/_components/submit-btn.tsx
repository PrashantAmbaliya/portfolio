import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";
import { Button } from "@/common/components/ui";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  const [isHovered, setIsHovered] = useState(false);

  const gradientStyle = isHovered
    ? {
        backgroundImage: "linear-gradient(130deg, #c084fc, #a855f7, #9333ea)",
      }
    : undefined;

  return (
    <Button
      type="submit"
      disabled={pending}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={gradientStyle}
      className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full text-white outline-none transition-all disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10 "
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1" />{" "}
        </>
      )}
    </Button>
  );
}
