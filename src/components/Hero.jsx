"use client";
import React from "react";
import Image from "next/image";
import Button from "./parts/Button";
import { ImQuotesLeft } from "react-icons/im";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger animations of children
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: ({ axis = "y", value = 0, scale = 1  } = {}) => ({
    opacity: 0,
    x: axis === "x" ? value : 0, // Use value for x-axis movement if 'x'
    y: axis === "y" ? value : 0, // Use value for y-axis movement if 'y'
    scale: scale,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,  // Reset the scale to original size
    transition: { type: "spring", stiffness: 40, damping: 20 },
  },
};
const Hero = () => {
  return (
    <div id="home" className="">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className=" z-20 hero-content max-w-[90%] pt-[150px] mx-auto flex flex-col gap-[100px] "
      >
        <div className="flex flex-col gap-5 mx-auto text-center items-center">
          <motion.p
            variants={childVariants}
            custom={{ axis: "y", value: 50 }}
            className="text-[26px] text-textcolor font-semibold border border-secondary px-[20px] rounded-full"
          >
            Hello &#10069;
          </motion.p>
          <motion.h2
            variants={childVariants}
            custom={{ axis: "y", value: 50 }}
            className=" head lg:text-[80px] text-[45px] leading-[1em] text-secondary font-semibold"
          >
            {" "}
            I&apos;m <span className="text-primary">Shabab,</span>
          </motion.h2>
          <motion.h2
            variants={childVariants}
            custom={{ axis: "y", value: 50 }}
            className=" text-[45px] lg:text-[80px] capitalize leading-[1em] font-semibold text-secondary"
          >
            {" "}
            full stack developer
          </motion.h2>
          {/* <p className="text-[22px] max-w-[550px]  text-textcolor">
            I am a full-stack developer focused on creating websites that
            provide the best experience for users.
          </p> */}
        </div>

        {/* second row in hero section */}

        <div className=" flex flex-col items-center gap-[40px] lg:flex-row">
          {/* left column */}
          <div className="w-[100%] order-3 lg:order-1 lg:w-[20%]">
            <motion.div
              variants={childVariants}
              custom={{ axis: "x", value: -50 }}
              className="flex flex-col gap-[15px]"
            >
              <ImQuotesLeft size={30} />
              <motion.p
                variants={childVariants}
                custom={{ axis: "x", value: -50 }}
                className="text-[17px]"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi id
                soluta nobis aliquid quo molestiae maiores adipisci. a.
              </motion.p>
              <motion.div
                variants={childVariants}
                custom={{ axis: "x", value: -50 }}
                className=""
              >
                <p className="font-semibold text-[50px]">450+</p>
                <p className="text-[17px] capitalize">client served</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Middle Column */}
          <div className=" relative order-1 h-[318px] lg:h-[550px] lg:order-2 w-[100%] lg:w-[65%] flex justify-center flex-col items-center">
            <motion.div variants={childVariants} custom={{scale:.6}} className=" mt-[-135px] w-[340px] lg:w-[525px]">
            <Image src="/assets/profile-img.png" width={450} height={50} alt="profileImg" className="w-full" />
            </motion.div>
            <motion.div  variants={childVariants} custom={{scale:.6}} className="z-[-10] absolute bottom-0 w-[80%] lg:w-[100%]">
            <Image 
              src="/assets/intersect.png"
              height={50}
              width={800}
              className="w-full"
            />
            </motion.div>
            <motion.div
              variants={childVariants}
              custom={{ axis: "y", value: 50 }}
              className=" absolute bottom-[80px] btn-wrapper flex gap-2 bg-white rounded-full p-2 "
            >
              <Button click={""} text="portfolio" bg={true} icon={true} />
              <Button click={""} text="hire me" bg={false} icon={false} />
            </motion.div>
          </div>

          {/* right Column */}
          <div className=" w-[100%] order-2 lg:order-3 lg:w-[20%] flex flex-col lg:items-end">
            {/* strar rating */}
            <motion.div
              variants={childVariants}
              custom={{ axis: "x", value: 50 }}
              className="flex items-center"
            >
              <svg
                class="w-6 h-6 text-primary ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-6 h-6 text-primary ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-6 h-6 text-primary ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-6 h-6 text-primary ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-6 h-6 ms-1 text-primary"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </motion.div>

            {/* text */}
            <motion.p
              variants={childVariants}
              custom={{ axis: "x", value: 50 }}
              className="text-[50px] font-semibold"
            >
              3 Years
            </motion.p>
            <motion.p
              variants={childVariants}
              custom={{ axis: "x", value: 50 }}
              className="text-[45px] font-medium"
            >
              Expert
            </motion.p>
            <motion.span
              variants={childVariants}
              custom={{ axis: "x", value: 50 }}
              className="h-[4px] w-[220px] block bg-black"
            ></motion.span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
