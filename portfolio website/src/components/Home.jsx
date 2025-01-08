import React from "react";
import avatar from "../assets/me.jpg";
import { motion } from "motion/react";

const Home = () => {
  return (
    <div className="py-10">
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1 }}
        src={avatar}
        className="mx-auto w-2/3 md:w-1/3 lg:w-1/4"
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
          <motion.span initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }} >I'm Frontend Developer</motion.span>
        </motion.h1>
        <p className="mb-8">Showcase</p>
        <motion.button 
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.5}}
        className="px-6 py-3 rounded-full bg-black text-white">
          Hire Me
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
