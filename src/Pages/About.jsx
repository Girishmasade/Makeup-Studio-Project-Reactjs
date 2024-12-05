import React from "react";
import ourMission from "../assets/Images/mission.jpg";
import aWoenDoingMakeup from "../assets/Images/women.jpg";
import OurStory from "../assets/Images/Our Story.jpg";
import ReviewsCard from "../Components/ReviewsCard";

const About = () => {
  return (
    <div className="pb-10">
      <div className="bg-about-us h-[20rem]">
        <div className="flex flex-col items-center text-center relative top-[30%] mx-auto">
          <p className="text-5xl font-bold text-pink-900 pb-2">
            Welcome to MakeupStudio
          </p>
          <p className="italic md:text-xl sm:text-lg">
            "your sanctuary of beauty and relaxation."
          </p>
        </div>
      </div>

      <div className="md:h-[35rem] pt-9 justify-evenly mb-7 flex-wrap flex items-center">
        <div className="flex flex-col space-y-6 p-5 ">
          <h1 className="text-5xl font-bold underline text-pink-700">
            About Us
          </h1>
          <p className="max-w-3xl text-lg font-light">
            Welcome to <span className="font-bold">MakeupStudio</span>, where
            beauty meets serenity. We are your trusted destination for
            rejuvenation, relaxation, and self-care. Nestled in a tranquil
            setting, our spa is designed to offer a serene escape from the
            hustle and bustle of everyday life.
          </p>
        </div>
        <img
          src={aWoenDoingMakeup}
          alt="makeup Women"
          className="md:w-[35%] w-[90%] rounded shadow-lg shadow-pink-400 hover:scale-105 transition-transform duration-200"
        />
      </div>

      <div className="grid gap-5 md:gap-14 px-4 lg:px-20 bg-blue-100">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={ourMission}
              alt="ourMission"
              className="hover:scale-105 transform-translate duration-200 md:w-2/3 w-4/4 p-2 pt-4 md:pb-5"
            />
          </div>

          <div className="md:w-1/2 md:text-start mt-6 md:mt-0 md:pl-0 md:pt-7 md:pr-10">
            <h1 className="pt-2 md:text-3xl text-xl font-bold text-pink-800">
              {" "}
              Our Mission:{" "}
            </h1>
            <p className="pt-4 md:text-xl font-bold text-pink-700 italic">
              "Through passion, innovation, and care, our mission is to inspire
              confidence, enhance well-being, and help you radiate beauty from
              within."
            </p>
            <p className="md:text-xl md:leading-8 text-pretty pt-4 space-y-3">
              At MakeupStudio, our mission is to provide a transformative beauty
              and wellness experience that uplifts, rejuvenates, and empowers
              every individual. We are committed to creating a serene escape
              where self-care becomes a meaningful ritual, not just a fleeting
              luxury.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-start md:items-start">
          <div className="md:w-1/2 mt-6 md:mt-0 md:pl-32 pb-10">
            <h1 className="md:text-2xl text-xl font-bold text-pink-800">
              Our Story:
            </h1>
            <p className="text-pretty pt-4 md:text-xl md:w-[110%] md:leading-8 pb-5">
              At MakeupStudio, our journey began with a simple idea: to create a
              sanctuary where people can pause, recharge, and rediscover their
              inner glow. Founded by Mayuri in 2021, our spa was born out of a
              passion for beauty, wellness, and the belief that everyone
              deserves a moment of tranquility in their busy lives.
            </p>
            <p className="md:text-xl md:leading-8 text-pretty">
              Miss Mayuri, inspired by their love for self-care and holistic
              well-being, envisioned a space where beauty and wellness could
              intertwine. With years of experience in [related field, e.g.,
              cosmetology, wellness therapy], they decided to bring this dream
              to life. What started as a small boutique spa has now blossomed
              into a trusted destination for relaxation and rejuvenation.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={OurStory}
              alt="Our Story"
              className="hover:scale-105 transform-translate duration-200 md:w-2/3 w-4/4 p-2 pt-4 md:pb-5"
            />
          </div>
        </div>
      </div>

      <div className="min-h-screen items-center text-center pt-4 pb-4">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-semibold text-pink-800 md:font-bold md:pt-10">
            What Our Customers Say
          </h1>
          <h4 className="md:text-lg md:w-3/4 md:pl-[25%] md:pr-0 pr-4 pl-4 text-pretty text-lg">
            At MakeupStudio, we take pride in providing exceptional experiences
            that leave our clients feeling refreshed, rejuvenated, and cared
            for. Here’s what some of our happy customers have to say:
          </h4>
        </div>

        <div className="md:pt-20">
          <ReviewsCard/>
        </div>
      </div>
    </div>
  );
};

export default About;
