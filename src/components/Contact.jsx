"use client";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { containerVariants, childVariants } from "@/data/data";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false); // Manage loading state

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_hlgl1no", "template_87k664l", form.current, {
        publicKey: "WYFpPefd7wMAHx22q",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          setLoading(false);
          toast.success("Email sent successfully!"); // Show success toast
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
          toast.error("Failed to send email. Please try again."); // Show error toast
        }
      );
  };
  //checking mobile state for animations
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
    <div className="">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        className=" w-[80%] md:w-[95%] max-w-[1200px] shadow-[0px_0px_25px_1px_rgba(0,0,0,0.2)] mx-auto  text-black/70 p-8 rounded-[25px] my-[40px] mb-[60px]"
        id="contact"
      >
        <motion.h2
          variants={childVariants}
          custom={{ axis: "y", value: 80 }}
          className=" text-center text-black capitalize text-[52px] font-semibold"
        >
          My <span className="text-primary">Services</span>{" "}
        </motion.h2>
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="flex justify-center items-center">
            <ul className="space-y-4">
              <motion.li
                variants={childVariants}
                custom={mobileVersion(-50)}
                className="flex items-center gap-3"
              >
                <Image
                  src="/assets/phone.png"
                  width={80}
                  height={80}
                  alt="phone"
                  className=" h-[50px] md:h-[90px] w-auto ]"
                />
                <p className=" text-[14px] md:text-xl">+92 323 8093104</p>
              </motion.li>
              <motion.li
                variants={childVariants}
                custom={mobileVersion(-50)}
                className="flex items-center gap-3"
              >
                <Image
                  src="/assets/mail.png"
                  alt="phone"
                  width={80}
                  height={80}
                  className=" h-[50px] md:h-[90px] w-auto ]"
                />
                <p className=" text-[14px] md:text-xl">
                  shababulhassan441@gmail.com
                </p>
              </motion.li>
            </ul>
          </div>

          <div className=" p-1 md:p-6 max-w-[550px]">
            <motion.h2
              variants={childVariants}
              custom={mobileVersion(50)}
              className="text-5xl font-bold text-primary mb-4"
            >
              Lets connect
            </motion.h2>
            <motion.p
              variants={childVariants}
              custom={mobileVersion(50)}
              className="text-black/70 mb-6"
            >
              Send me message and lets schedule a call
            </motion.p>
            <motion.form
              variants={childVariants}
              custom={mobileVersion(50)}
              ref={form}
              onSubmit={sendEmail}
              className="space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  className="bg-black text-white rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="First Name"
                  name="first_name"
                />
                <input
                  type="text"
                  className="bg-black text-white rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Last Name"
                  name="last_name"
                />
                <input
                  type="email"
                  className="bg-black text-white rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Email"
                  name="user_email"
                />
                <input
                  type="phone"
                  className="bg-black text-white rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Phone"
                  name="user_phone"
                />
              </div>
              <textarea
                className="bg-black text-white rounded-xl w-full p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Your Message"
                name="message"
              ></textarea>
              <button
                type="submit"
                value="send"
                disabled={loading}
                className="bg-primary/90 hover:bg-primary/100 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl"
              >
                {loading ? "Loading..." : "Send message"}
              </button>
            </motion.form>
            <ToastContainer />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
