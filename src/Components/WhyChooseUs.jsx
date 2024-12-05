import React from "react";
import personalizedCare from "../assets/Images/personalized-care.jpg";
import ExperiencedProfessionals from "../assets/Images/Experienced-Professionals.jpg";
import PremiuProducts from "../assets/Images/Premiu-Products.jpg";

const WhyChooseUs = () => {
  return (
    <div className="bg-blue-50 p-4">
      <h1 className="text-center text-4xl lg:text-5xl font-semibold pb-8 pt-5 text-pink-600">
        Why Choose Us
      </h1>

      <div className="grid gap-12 md:gap-16 px-4 lg:px-20">

        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={personalizedCare}
              alt="Personalized Care"
              className="w-4/4 md:w-2/3"
            />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10">
            <h2 className="text-xl font-bold text-pink-800 mb-4">
              Experienced Professionals
            </h2>
            <ul className="space-y-6 text-gray-800">
              <li>
                <span className="font-bold text-pink-900">
                  Expertise That You Can Trust:
                </span>{" "}
                Our team of licensed and highly trained professionals is
                passionate about what they do. From certified beauty therapists
                to skilled massage experts, each member of our team brings years
                of experience in the beauty and wellness industry.
              </li>
              <li>
                <span className="font-bold text-pink-900">
                  Personalized Service for Every Client:
                </span>{" "}
                We understand that every person is unique, and so are your beauty
                and wellness needs. Our experienced professionals tailor every
                service to enhance your natural beauty.
              </li>
              <li>
                <span className="font-bold text-pink-900">
                  Continuous Learning and Training:
                </span>{" "}
                We believe in staying ahead of the curve by upgrading our skills
                through regular workshops and training sessions.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center md:items-start">
          <div className="md:w-1/2 mt-6 md:pl-32 md:mt-0 md:pr-10">
            <h2 className="text-xl font-bold text-pink-800 mb-4">
              Personalized Care
            </h2>
            <ul className="space-y-4 text-gray-800">
              <li>
                <span className="font-bold">Facials & Skin Care:</span> Customized
                treatments to improve skin health and appearance.
              </li>
              <li>
                <span className="font-bold">Massage Therapy:</span> Relaxation and
                therapeutic massages for your well-being.
              </li>
              <li>
                <span className="font-bold">Hair Care & Styling:</span>{" "}
                Professional cuts, coloring, and styling.
              </li>
              <li>
                <span className="font-bold">Nail Care:</span> Manicures and
                pedicures for perfectly polished nails.
              </li>
              <li>
                <span className="font-bold">Body Treatments:</span> Detoxifying
                wraps, scrubs, and more.
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={ExperiencedProfessionals}
              alt="Experienced Professionals"
              className="w-4/4 md:w-2/3"
            />
          </div>
        </div>

     
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={PremiuProducts}
              alt="Premium Products"
              className="w-4/4 md:w-2/3"
            />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10">
            <h2 className="text-xl font-bold text-pink-800 mb-4">
              Premium Products
            </h2>
            <ul className="space-y-6 text-gray-800">
              <li>
                We use only the finest skincare and beauty products. Our range of
                premium, dermatologically tested products is carefully selected
                to ensure your skin and body are treated with the highest quality
                ingredients.
              </li>
              <li>
                We believe that beauty isn’t just skin deep — it’s about an
                experience. That's why we use luxury products that transform a
                simple treatment into an indulgent, spa-like experience.
              </li>
              <li>
                The quality of the products we use directly impacts the results
                you achieve. By using top-tier brands, we ensure that your skin
                feels nourished, rejuvenated, and glowing long after your
                treatment.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
