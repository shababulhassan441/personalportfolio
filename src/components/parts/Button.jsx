"use client";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Button = ({ text, bg, icon, click, isSelected }) => {
  return (
    <div>
      <button
        onClick={click ? () => click(text) : null}
        className={` flex items-center justify-center gap-1 capitalize border-[2px] ${
          bg
            ? "bg-primary text-white border-primary"
            : "border-secondary font-bold"
        } py-[8px] rounded-full text-[18px] font-semibold  w-[145px] ${
          isSelected ? " bg-primary text-white border-orange-600" : ""
        } `}
      >
        {text}
        {icon ? <GoArrowUpRight size={25} /> : ""}
      </button>
    </div>
  );
};

export default Button;
