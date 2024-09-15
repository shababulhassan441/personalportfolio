import Image from "next/image";
import React from "react";
import profilepic from "../assets/profilepic.png";
import FloatingIcons from "./parts/floatingIcons";

const Hero = () => {
  return (
    <div  className="py-28 relative overflow-clip">
      {/* <div className=" absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2b1942)]"></div> */}
      <div className="relative">
        <div className="text-8xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Hi, I am </h1>
          <h1 className="text-[#E48A57]">Shabab Ul Hassan </h1>
        </div>

        <FloatingIcons />

        <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-black/80">
          I am a full-stack developer focused on creating websites that provide
          the best experience for users.
        </p>

        <Image
          src={profilepic}
          alt="profile Picture"
          className="h-auto w-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
