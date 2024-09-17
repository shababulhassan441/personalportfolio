"use client";
import React from "react";
import { motion } from "framer-motion";
import { services, containerVariants, childVariants } from "@/data/data";

const Services = () => {
  return (
    <div id="services" className="bg-lightcolor">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className=" max-w-[1240px] mx-auto py-[60px] pt-[40px] my-[60px] text-center "
      >
        <motion.h2
          variants={childVariants}
          custom={{ axis: "y", value: 80 }}
          className=" text-center text-black capitalize text-[52px] font-semibold"
        >
          My <span className="text-primary">Services</span>{" "}
        </motion.h2>
        <div className="mt-[60px] flex gap-[50px]   justify-center flex-wrap ">
          {services.map(({ icon, title, disc }, index) => (
            <motion.div
              variants={childVariants}
              custom={{ axis: "y", value: 80 }}
              key={index}
              className=" relative w-[350px] rounded-xl flex flex-col items-center gap-2 shadow-lg bg-white px-[25px] py-[25px]"
            >
              <div className=" absolute top-[-40px]">{icon}</div>
              <h3 className="text-[22px] font-semibold capitalize mt-3">
                {title}
              </h3>
              <p>{disc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
