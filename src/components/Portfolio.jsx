"use client";
import { useState } from "react";
import React from "react";
import Button from "./parts/Button";
import Image from "next/image";
import { tabsData, projectData } from "../data/data";

const Portfolio = () => {
  const [items, setItems] = useState(projectData);

  const filterItem = (categItem) => {
    if (categItem.toLowerCase() === "all") {
      // If category is "all", return the complete array
      setItems(projectData);
    } else {
      // Otherwise, filter based on the category
      const updatedItems = projectData.filter((curElem) => {
        return curElem.category.toLowerCase() === categItem.toLowerCase();
      });
  
      setItems(updatedItems);
    }
  };

  return (
    <div id="projects" className="">
      <div className=" max-w-[1240px] mx-auto py-[60px] pt-[40px] my-[60px] text-center">
        <h2 className=" text-center text-black capitalize text-[52px] font-semibold">
          My <span className="text-primary">Projects</span>{" "}
        </h2>
        <div className="tabs-container flex-wrap flex justify-center gap-3 mt-[40px] py-[20px] max-w-[800px] mx-auto">
          {tabsData.map((tab, index) => (
            <div key={index} className="">
              <Button click={filterItem} text={tab.name} />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-[40px] mt-[40px]">
          {items.map(({ id, name, desc, link, category, img }, index) => (
            <div
              key={index}
              className="portfolio-card p-[20px] w-[330px] md:w-[370px] rounded-[15px] shadow-[5px_5px_15px_1px_rgba(0,0,0,0.2)]"
            >
              <div className="image-wrap w-full">
                <Image
                  alt={name}
                  src={img}
                  className="object-cover h-full w-full"
                  width={200}
                  height={200}
                />
              </div>
              <div className="content mt-[18px] flex items-center gap-2 flex-col">
                <p className="text-[22px] font-semibold capitalize">{name}</p>
                <p className="mb-[10px]">{desc}</p>
                <Button text="view demo" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
