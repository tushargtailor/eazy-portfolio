import React from "react";
import avatar from "../assets/favicon.png";
import { motion } from "motion/react";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <div className="py-7">
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1 }}
        src={avatar}
        className="mx-auto w-2/3 md:w-1/3 lg:w-1/4 h-62 w-62 "
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="container mx-auto text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-4xl md:text-5xl flex flex-col gap-4 font-bold mb-4"
        >
          Tushar Tailor
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {" "}
            I'm{" "}
            <span style={{ color: "hsl(353, 100%, 65%)", fontWeight: "bold" }}>
              <Typewriter
                style={{ color: "hsl(353, 100%, 65%)", fontWeight: "bold" }}
                words={["Frontend Developer", "UI/UX DESIGNER"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.span>
        </motion.h1>
        <p className="mb-6">
          <div className="flex justify-center space-x-4 mt-4">
            <a className="hover:text-gray-700" href="">
              {" "}
              <FaLinkedin className="w-6 h-6" />{" "}
            </a>
            <a className="hover:text-gray-700" href="">
              {" "}
              <FaTwitter className="w-6 h-6" />{" "}
            </a>
            <a className="hover:text-gray-700" href="">
              {" "}
              <FaInstagram className="w-6 h-6" />{" "}
            </a>
          </div>
        </p>
        <motion.button
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="px-6 py-3 rounded-full bg-black text-white"
        >
          <Link to="contact" smooth={true} duration={500} offset={-70}>
            Hire Me
          </Link>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
