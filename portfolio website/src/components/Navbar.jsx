import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "motion/react";
import { Link } from "react-scroll";

const Navbar = () => {
  const variants = {
    open: { clipPath: "circle(1200px at 43px 43px)" },
    transition: {
      type: "spring",
    },
    closed: {
      clipPath: "circle(25px at 43px 37px)",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };

  const [menu, setMenu] = useState(false);

  const items = [
    { id: 1, text: "About", to: "about" },
    { id: 2, text: "Service", to: "services" },
    { id: 3, text: "Work", to: "work" },
    { id: 4, text: "Contact", to: "contact" },
  ];

  return (
    <div className="bg-slate-100">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto hidden md:flex justify-between items-center py-6 px-6"
      >
        <div className="text-xl lg:text-2xl font-bold flex items-center gap-1">
          <span className=" text-[#353252] ">TUSHAR</span>
          <span className="text-[#353252]">TAILOR</span>
        </div>
        <div className="">
          <ul className="hidden cursor-pointer text-[#353252] font-semibold md:flex items-center space-x-6 list-none lg:text-lg md:text-base ">
            {items.map(({ id, text, to }) => (
              <li key={id}>
                <Link to={to} smooth={true} duration={500} offset={-70}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <a
          className="md:text-base lg:text-lg bg-[#FF4C61] text-white hover:text-gray-600 px-4 py-2 rounded-full"
          href=""
        >
          Download CV
        </a>
      </motion.div>

      <div className="flex md:hidden justify-between">
        <motion.div animate={menu ? "open" : "closed"}>
          <motion.div
            variants={variants}
            onClick={() => setMenu((prev) => !prev)}
            className="bg-white w-2/3 h-screen text-black fixed z-10"
          >
            <div className="px-7 py-6">
              {menu ? <IoCloseSharp size={30} /> : <AiOutlineMenu size={30} />}
            </div>
            {menu && (
              <div className="flex flex-col justify-center items-center ">
                <ul className="space-y-6 text-black text-lg">
                  {items.map(({ id, text, to }) => (
                    <li key={id} className="cursor-pointer">
                      <Link to={to} smooth={true} duration={500} offset={-70}>
                  {text}
                </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100, y: -100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold flex items-center gap-2 py-6 px-4"
        >
          <span className="text-[#353252]">TT</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
