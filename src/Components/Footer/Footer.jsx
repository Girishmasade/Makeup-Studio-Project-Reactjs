import React from "react";
import Logo from "/Logo.png";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between flex-wrap gap-2 bg-gray-200 md:h-[20rem] md:pt-6">
      <div className="grid grid-rows-1 md:grid-cols-4 pr-[4%] pl-[8%]">
        <div className="flex flex-col">
          <img src={Logo} alt="Logo" className="w-32 relative right-[5%]" />
          <p className="text-lg">
            Relax, rejuvenate, and rediscover your glow with our luxurious
            treatments.
          </p>
        </div>

        <div className="md:pl-32 sm:text-start">
          <h3 className="pt-4 font-semibold pb-2 text-lg text-pink-700">Quick Links</h3>
          <ul className="space-y-2 text-lg">
            <li>
              <a href="/home" className="hover:text-gray-600">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-600">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-600">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="md:pt-3 pt-5">
          <h3 className="text-lg font-semibold mb-4 text-pink-700">
            Connect With Us
          </h3>
          <div className="flex space-x-4 text-lg">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="hover:text-pink-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="hover:text-blue-400"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              className="hover:text-red-400"
            >
              <FaYoutube />
            </a>
            <a
              href="https://in.pinterest.com/"
              target="_blank"
              className="hover:text-red-400"
            >
              <FaPinterest />
            </a>
          </div>
        </div>

        <div className="md:pt-3 pt-5">
          <h3 className="text-lg font-semibold mb-2 text-pink-700">
            Our Location
          </h3>
          <p>MakeupStudio ram nagar, Chandrapur, Maharashtra, 442401</p>
          <p className="mt-2">Phone: (+91) 98765-43210</p>
          <p>Email: makeupstudio@gmail.com</p>
        </div>
      </div>
      <div className="bg-gray-400 mt-4 p-4">
        <p className="text-center font-semibold text-lg">
          Copyright © 2024 - 2025 MakeupStudio®. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
