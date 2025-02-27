import React from "react";
import aboutImg from "../assets/hero.png";
import { motion } from "motion/react";

const About = () => {
  return (
    <div id='about' className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl text-[#353252] md:text-4xl font-bold mb-8 underline">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="mb-8 md:mb-0 md:mr-8 flex justify-center">
            <img src={aboutImg} className="w-2/3 sm:w-1/2 md:w-10/12" />
          </div>
          <p className="md:w-1/2 text-left px-4 md:px-0 text-base sm:text-lg md:text-xl">
            As a frontend-focused web developer, I am passionate about creating
            user-friendly, visually appealing, and responsive web applications.
            With a solid foundation in HTML, CSS, and JavaScript, I have
            experience working with various libraries and frameworks like
            ReactJS, Redux, and Bootstrap to develop dynamic and engaging user
            interfaces. <br /><br />
            As a fresher, I am highly motivated and eager to learn new technologies and best practices in web development. I am a quick learner and have excellent problem-solving skills, enabling me to develop clean and maintainable code that adheres to industry standards and best practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
