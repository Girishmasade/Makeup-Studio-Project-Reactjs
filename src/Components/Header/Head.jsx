import React, { useState } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-2 border-2 border-gray-300 rounded">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center text-black font-bold text-xl">
         <a href="/"> <img src="./Logo.png" alt="Logo" className='w-20'/></a>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="lg:flex lg:space-x-8 lg:pb-4 text-pink-800 font-semibold text-xl">
            <li>
              <a href="/" className="block mt-4 lg:inline-block lg:mt-0 hover:underline pt-2">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 hover:underline pt-2">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="block mt-4 lg:inline-block lg:mt-0 hover:underline pt-2">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="block mt-4 lg:inline-block lg:mt-0 hover:underline pt-2">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
