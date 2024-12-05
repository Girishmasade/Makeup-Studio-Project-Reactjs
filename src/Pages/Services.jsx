import React from 'react'
import OurServices from '../Components/OurServices'
import { ourServices } from '../utils/Services';

const Services = () => {
  return (
    <div>
      <OurServices/>
     <div className="md:p-20 md:pt-0">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
        {ourServices.map((item) => {
          return (
            <div
              className="flex flex-col items-center space-y-3 text-center"
              key={item.id}
            >
              <a href="/services">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
              </a>
              <h2 className="font-bold text-pink-800 text-lg">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          );
        })}
      </div>
     </div>
    </div>
  )
}

export default Services
