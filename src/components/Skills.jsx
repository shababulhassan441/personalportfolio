"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, childVariants, skillIcons } from "@/data/data";

const Skills = () => {
  return (
    <div id="skills" className="">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className=" max-w-[1240px] mx-auto my-[60px] text-center"
      >
        <motion.h2
          variants={childVariants}
          custom={{ axis: "y", value: 80 }}
          className=" text-center text-black capitalize text-[52px] font-semibold"
        >
          Skills <span className="text-primary">stack</span>{" "}
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-7 mt-[40px] w-[90%] mx-auto">
          {skillIcons.map((item, index) => (
            <motion.div
              variants={childVariants}
              custom={{ axis: "y", value: 50 }}
              key={index}
              className="shadow-[5px_5px_15px_1px_rgba(0,0,0,0.2)] p-5 w-[200px] flex flex-col items-center gap-4 rounded-md"
            >
              <Image width={80} height={80} src={item.icon} alt={item.label} />
              <p className="text-[21px] font-semibold capitalize">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
