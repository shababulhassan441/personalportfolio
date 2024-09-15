import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaAppStoreIos } from "react-icons/fa";
import { ImWordpress } from "react-icons/im";
import { SiNextdotjs } from "react-icons/si";
import { FaWebflow } from "react-icons/fa6";



const services = [
  {
    icon: <SiNextdotjs size={70} color="#fe4519" />,
    title: "Nextjs development",
    disc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolore? Molestias fugit in provident facilis.",
  },
  {
    icon: <FaAppStoreIos size={70} color="#fe4519" />,
    title: "App development",
    disc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolore? Molestias fugit in provident facilis.",
  },
  {
    icon: <FaWebflow size={70} color="#fe4519" />,
    title: "webflow development",
    disc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolore? Molestias fugit in provident facilis.",
  },
 
  {
    icon: <ImWordpress size={70} color="#fe4519" />,
    title: "wordpress development",
    disc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolore? Molestias fugit in provident facilis.",
  },
  {
    icon: <MdLocalGroceryStore size={70} color="#fe4519" />,
    title: "Ecommerce development",
    disc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolore? Molestias fugit in provident facilis.",
  },
 
];
const Services = () => {
  return (
    <div id="services" className="bg-lightcolor">
      <div className=" max-w-[1240px] mx-auto py-[60px] pt-[40px] my-[60px] text-center ">
        <h2 className=" text-center text-black capitalize text-[52px] font-semibold">
          My <span className="text-primary">Services</span>{" "}
        </h2>
        <div className="mt-[60px] flex gap-[50px]   justify-center flex-wrap ">
          {services.map(({icon,title,disc}, index) => (
            <div key={index} className=" relative w-[350px] rounded-xl flex flex-col items-center gap-2 shadow-lg bg-white px-[25px] py-[25px]">
                <div className=" absolute top-[-40px]">{icon}</div>
              <h3 className="text-[22px] font-semibold capitalize mt-3">
                {title}
              </h3>
              <p>
                {disc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
