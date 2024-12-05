import React from "react";
import {Link} from 'react-router-dom'
import { services } from "../utils/Services";

const OurServices = () => {
  return (
    <div className="md:p-20">
      <h1 className="text-center text-4xl pt-10 font-bold text-pink-600">
        Our Special Services
      </h1>
      <p className="text-center sm:w-[50%] w-[90%] md:pb-20 pt-4 mx-auto text-gray-700">
        Welcome to MakeupStudio, where we offer a wide range of premium
        services to rejuvenate your mind, body, and spirit. Explore our
        carefully curated treatments below:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
        {services.map((item) => {
          return (
            <div
              className="flex flex-col items-center space-y-3 text-center"
              key={item.id}
            >
              <Link to="/services">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <h2 className="font-bold text-pink-800 text-lg">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;
