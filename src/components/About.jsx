"use client";
import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import computer from "../app/lottie/computer.json";
import Button from "./parts/Button";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { containerVariants, childVariants } from "@/data/data";
const About = () => {
  const getInitialMobileState = () =>
    typeof window !== "undefined" && window.innerWidth <= 768;
  const [isMobile, setIsMobile] = useState(getInitialMobileState);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile); // Update on resize

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const mobileVersion = (value) => {
    return isMobile ? { axis: "y", value: 50 } : { axis: "x", value: value };
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      id="about"
      className="py-[60px] bg-secondary rounded-l-[40px] rounded-r-[40px] mt-[40px] lg:mt-0"
    >
      <motion.h2
        variants={childVariants}
        custom={{ axis: "y", value: 80 }}
        className=" text-center text-white capitalize text-[52px] font-semibold"
      >
        about <span className="text-primary">me</span>{" "}
      </motion.h2>
      <div className="max-w-[1240px] flex flex-col lg:flex-row items-center mx-auto mt-[30px]">
        <div className=" w-[100%] lg:w-[50%]">
          <motion.div
            variants={childVariants}
            custom={mobileVersion(-50)}
            className=" w-[350px] lg:w-[500px] mx-auto"
          >
            <Lottie animationData={computer} />
          </motion.div>
        </div>
        <div className=" w-[100%] lg:w-[50%] flex flex-col gap-3 p-[40px]">
          <motion.p
            variants={childVariants}
            custom={mobileVersion(50)}
            className="text-primary text-[22px] capitalize "
          >
            front end developer
          </motion.p>
          <motion.p
            variants={childVariants}
            custom={mobileVersion(50)}
            className="text-[42px] font-semibold text-white capitalize leading-[1.2em]"
          >
            I&apos;m Shabab passionate developer{" "}
          </motion.p>
          <motion.p
            variants={childVariants}
            custom={mobileVersion(50)}
            className="text-white text-[17px] mb-[20px]"
          >
            Web Developer with a Computer Engineering background. Proficient in
            HTML5, CSS3, Bootstrap, Tailwind, Sass, JavaScript ES6, ReactJS,
            TypeScript, NextJS, and much more.I specialize in creating visually
            stunning responsive, and SEO-friendly websites and apps from custom
            Figma/PSD designs. Let’s turn your vision into reality. Contact me
            to get started!
          </motion.p>
          <motion.div variants={childVariants} className="">
            <Link smooth={true} to="contact" offset={-80}>
              <Button text="hire me" bg={true} />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
