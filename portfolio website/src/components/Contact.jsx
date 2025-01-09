import React from "react";
import { motion } from "motion/react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <h2 className="text-4xl text-[#353252] font-bold">
          Get In <span>Touch</span>
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="bg-[#FF4C61] p-4 rounded-full">
              <FaPhone className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-lg text-[#353252] font-medium ">Call Me</p>
              <p className="text-[#353252]">+91 11111 11111</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-[#FF4C61] p-4 rounded-full">
              <FaEnvelope className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-lg text-[#353252] font-medium ">Email</p>
              <p className="text-[#353252]">tushar.sdmcc.cs@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-[#FF4C61] p-4 rounded-full">
              <FaMapMarkerAlt className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-lg text-[#353252] font-medium ">Address</p>
              <p className="text-[#353252]">Dadra & Nagar Haveli, India</p>
            </div>
          </div>
        </div>

        <form action="" className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              className="p-4 rounded-md w-full bg-white shadow-md focus:ring-2 focus:ring-[#FF4C61] focus:outline-none transition-shadow"
              type="text"
              placeholder="full name"
            />
            <input
              className="p-4 rounded-md w-full bg-white shadow-md focus:ring-2 focus:ring-[#FF4C61] focus:outline-none transition-shadow"
              type="email"
              placeholder="Your email"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              className="p-4 rounded-md w-full bg-white shadow-md focus:ring-2 focus:ring-[#FF4C61] focus:outline-none transition-shadow"
              type="text"
              placeholder="Subject"
            />
          </div>
          <textarea
            className="p-4 rounded-md w-full bg-white shadow-md focus:ring-2 focus:ring-[#FF4C61] focus:outline-none transition-shadow"
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            className="bg-[#FF4C61] text-white px-6 py-3 rounded-md hover:bg-[#f43047] transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="mt-48 flex justify-between bg-slate-100 items-center p-5 border-t-2 ">
        <p>© 2025, All Rights Reserved</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a className="hover:text-gray-700 text-[#353252]" href="">
            {" "}
            <FaLinkedin className="w-6 h-6" />{" "}
          </a>
          <a className="hover:text-gray-700 text-[#353252]" href="">
            {" "}
            <FaTwitter className="w-6 h-6" />{" "}
          </a>
          <a className="hover:text-gray-700 text-[#353252]" href="">
            {" "}
            <FaInstagram className="w-6 h-6" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
