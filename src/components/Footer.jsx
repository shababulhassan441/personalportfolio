import React from "react";
import Button from "./parts/Button";
import Image from "next/image";
import { IoMdSend } from "react-icons/io";


const Footer = () => {
  return (
    <div className="pt-[80px] px-[30px] md:px-[70px] rounded-t-[80px] bg-secondary">
      <div className=" flex gap-3 flex-wrap w-[100%] justify-between items-center mx-auto">
        <h3 className=" capitalize text-[32px] md:text-[42px] font-semibold text-white">
          let's connect there
        </h3>
        <Button text="hire me" bg={true} icon={true} />
      </div>
      <div className="py-[30px] w-[98%] mx-auto flex flex-col md:flex-row md:justify-between gap-[60px] mt-[20px] border-b border-t border-white/30">
        <div className="w-[100%] md:w-[30%]  flex flex-col gap-5 ">
          <Image src="/assets/mylogo.png" height={50} width={100} className="w-[150px]" alt="logo" />
          <p className="text-white/70">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            et, reprehenderit tempora provident sapiente dicta, facere porro ex
            beatae quisquam laboriosam natus.
          </p>
        </div>
        <div className=" w-[100%] md:w-[70%] md:gap-0 gap-5  flex-wrap justify-end  flex ">
          <div className="flex flex-col gap-4 w-[100%] md:w-[20%]">
            <h3 className="text-[22px] text-primary">Navigation</h3>
            <div className=" list-none flex flex-col gap-2 text-white/70">
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Resume</li>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[100%] md:w-[20%]">
            <h3 className="text-[22px] text-primary">Contact</h3>
            <div className=" list-none flex flex-col gap-2 text-white/70">
              <li>Services</li>
              <li>+923238093104</li>
              <li>shababulhassan441@gmail.com</li>
              <li>https://shabab.site</li>
            </div>
          </div>
          <div className=" w-[100%] md:w-[60%] flex flex-col items-center md:items-end">
            <p className="mb-[15px] text-[22px] text-primary">Get the latest information</p>
            <form className="flex items-center" action="">
                <input className="py-[10px] px-[15px] rounded-l-lg" type="text" placeholder="Email address" />
                <button className="bg-primary p-[12px] rounded-r-lg" type="submit" >
                    <IoMdSend color="white" size={20} />
                </button>
            </form>
          </div>
        </div>
      </div>
      <div className="py-[20px] flex flex-col md:flex-row justify-between items-center">
        <p className="text-white">Copyright 2024 <span className="text-primary">shabab.</span> all Right reserved</p>
        <p className="text-white">User Terms and Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
