import React from 'react'
import { motion } from 'motion/react'
import Image1 from '../assets/service-1.svg'
import Image2 from '../assets/service-2.svg'
import Image3 from '../assets/service-3.svg'

const Services = () => {

    const ServicesData = [
        {   
            image: Image2,
            title: 'Web Development',
            description: 'Developing dynamic websites with precision, innovation, and a focus on success.',
        },
        {   
            image: Image1,
            title: 'UI/UX design',
            description: 'Designing immersive interfaces for optimal user engagement and satisfaction.',
        },
        {   
            image: Image3,
            title: 'SEO Optimization',
            description: 'Implementing strategic SEO techniques to enhance your websites visibility and search engine rankings.',
        },
    ]

    // Define custom background colors for each service
    const colors = ['bg-yellow-500', 'bg-green-500', 'bg-red-500']; // Use your preferred colors here

  return (
    <div id='services' className='py-16'>
        <div className='container mx-auto px-32 text-center'>
            <h2 className='text-3xl text-[#353252] md:text-4xl font-bold underline mb-8'>Services</h2>
            <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8'>
                {ServicesData.map((service, index) => (
                    <div 
                        key={index} 
                        className={`${colors[index]} text-white rounded-lg p-6 text-center hover:shadow-lg hover:shadow-gray-500 transition-shadow duration-300`}
                    >
                        <img src={service.image} className='mb-5 h-24 w-28 mx-auto' />
                        <h3 className='text-lg sm:text-lg lg:text-2xl font-semibold mb-2'>{service.title}</h3>
                        <p className='text-sm sm:text-base lg:text-lg'>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services
