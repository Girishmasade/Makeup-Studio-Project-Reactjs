
import Herosection from "../Components/HeroSection";
import OurServices from "../Components/OurServices";
import WhyChooseUs from "../Components/WhyChooseUs";

const Home = () => {
  return (
    <>
   <Herosection/>
   <WhyChooseUs/>
   <OurServices/>
    </>
  );
};

export default Home;


// import React from "react";
// import image1 from "../assets/Images/image1.jpg";

// const Home = () => {
//   return (
//     <div className="bg-pink-400 p-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* Text Section */}
//         <div className="space-y-4 text-center md:text-left">
//           <h1 className="text-3xl md:text-4xl font-bold">
//             Relax. Refresh. Rejuvenate.
//           </h1>
//           <h4 className="text-xl md:text-2xl">
//             Experience the luxury of wellness and beauty.
//           </h4>
//           <p className="text-base md:text-lg leading-relaxed">
//             Step into a world of tranquility and luxury at our beauty spa, where
//             every detail is designed to rejuvenate your body, mind, and soul.
//             Indulge in our personalized treatments, crafted to provide you with
//             the ultimate relaxation experience.
//           </p>
//           <button className="bg-pink-800 py-3 px-6 font-semibold rounded-full text-white hover:bg-pink-700 transition-all">
//             Book An Appointment
//           </button>
//         </div>
//         {/* Image Section */}
//         <div className="flex justify-center md:justify-end">
//           <img
//             src={image1}
//             alt="Spa Image"
//             className="rounded-full w-[70%] md:w-[50%] lg:w-[40%] shadow-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

