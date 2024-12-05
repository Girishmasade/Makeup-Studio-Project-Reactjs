import React from "react";
import image1 from "../assets/Images/image1.jpg";
import { Link } from "react-router-dom";

const Herosection = () => {
  return (
    <>
    <div className="bg-custom-pattern p-10 text-center pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
        <div className="space-y-4 text-center md:text-left md:relative left-[12%]">
          <h1 className="text-3xl md:text-4xl font-bold">
            Relax. <span className="text-pink-700">Refresh</span>. Rejuvenate.
          </h1>
          <h4 className="text-xl md:text-2xl italic">
            "Experience the luxury of wellness and beauty."
          </h4>
          <p className="text-base md:text-lg leading-relaxed">
            Step into a world of tranquility and luxury at our beauty spa, where
            every detail is designed to rejuvenate your body, mind, and soul.
            Indulge in our personalized treatments, crafted to provide you with
            the ultimate relaxation experience.
          </p>
          <button className="bg-pink-800 py-3 px-6 font-semibold rounded-full text-white hover:bg-pink-700 transition-all">
            <Link to="/contact">Book An Appointment</Link>
          </button>
        </div>
       
        <div className="flex justify-center md:justify-center">
          <img
            src={image1}
            alt="Spa Image"
            className="rounded-full w-[70%] md:w-[70%] lg:w-[40%] shadow-lg"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Herosection;