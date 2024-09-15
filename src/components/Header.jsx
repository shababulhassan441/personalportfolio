"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { TfiMenu } from "react-icons/tfi";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbar, setNavbar] = useState(false);

  // Handle scroll behavior
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // If scrolling down, hide navbar
        setShowNavbar(false);
      } else {
        // If scrolling up, show navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div className="">
      <div
        className={`z-10 fixed top-[30px] left-[50%] translate-x-[-50%] h-[80px] w-[100%] max-w-[90%] backdrop-blur-sm bg-black/70 flex justify-between items-center px-[40px] rounded-full transition-transform  ease-in-out duration-500 ${
          showNavbar
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        }`}
      >
        <div className="left-links hidden md:flex text-white cursor-pointer text-[18px] list-none gap-[20px]">
          <Link spy={false} smooth={true} to="home">
            Home
          </Link>
          <Link offset={-100} spy={false} smooth={true} to="about">
            About
          </Link>
          <Link
            activeStyle={true}
            offset={-100}
            spy={false}
            smooth={true}
            to="services"
          >
            Service
          </Link>
        </div>
        <Image src="/assets/mylogo.png" width={140} height={50} alt="logo" />
        <div className="right-links hidden md:flex text-white cursor-pointer text-[18px] list-none  gap-[20px]">
          <Link offset={-140} spy={false} smooth={true} to="skills">
            Skills
          </Link>
          <Link offset={-100} spy={false} smooth={true} to="projects">
            Projects
          </Link>
          <Link spy={false} smooth={true} to="contact">
            Contact
          </Link>
        </div>
        <button
          onClick={() => setNavbar((e) => !e)}
          className=" visible md:hidden"
        >
          {!navbar ? (
            <TfiMenu color="white" size={35} />
          ) : (
            <RxCross1 color="white" size={35} />
          )}
        </button>
      </div>
      <div
        className={`md:hidden z-20 fixed flex flex-col gap-[30px] backdrop-blur-sm top-0 w-[75%] h-screen bg-secondary/90 p-10 ease-in duration-500  ${
          navbar ? " left-0 " : " left-[-100%] "
        }`}
      >
        <Image src="/assets/mylogo.png" height={50} width={150} />
        <div className=" flex flex-col gap-5 text-[18px] text-white">
          <Link onClick={() => setNavbar((e) => !e)} smooth={true} to="home">Home</Link>
          <Link onClick={() => setNavbar((e) => !e)} smooth={true} to="about">About</Link>
          <Link onClick={() => setNavbar((e) => !e)} smooth={true} to="services">Services</Link>
          <Link onClick={() => setNavbar((e) => !e)} smooth={true} to="skills">Skills</Link>
          <Link onClick={() => setNavbar((e) => !e)} smooth={true} to="projects">Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
