"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import cursor from "@/assets/icon1.png";
import lighting from "@/assets/icon2.png";
import { useRef } from "react";


const FloatingIcons = () => {
  const constraintsRef = useRef(null)
  return (
    <motion.div className="relative max-w-[90%] mx-auto" ref={constraintsRef}>
      <motion.div className=" absolute left-[280px] top-[120px]" drag dragConstraints={constraintsRef}>
        <Image
          src={cursor}
          height="170"
          width="170"
          alt="cursor"
          className=""
          draggable="false"
          
        />
      </motion.div>
      <motion.div className=" absolute right-[120px] top-[20px]" drag dragConstraints={constraintsRef}>
        <Image
          src={lighting}
          height="120"
          width="120"
          alt="cursor"
          className=""
          draggable="false"
        />
      </motion.div>
    </motion.div>
  );
};

export default FloatingIcons;
