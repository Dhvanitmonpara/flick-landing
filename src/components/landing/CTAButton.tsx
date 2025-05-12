"use client"

import { IoIosArrowForward, IoMdArrowForward } from "react-icons/io";
import { Button } from "../ui/button";
import { useState } from "react";

const CTAButton = ({ size = "xl" }: { size?: "sm" | "lg" | "xl" }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Button
      size={size}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variant="primary"
      className="group transition-all hover:scale-105 hover:shadow-xl hover:bg-red-500/90"
    >
      <span>Start Flicking</span>
      {isHovered ? <IoMdArrowForward className="text-sm" /> : <IoIosArrowForward className="text-sm" />}
    </Button>
  )
}

export default CTAButton