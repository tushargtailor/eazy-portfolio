import React from 'react'
import {FaAppStore} from 'react-icons/fa'
import { motion } from 'motion/react'

const Services = () => {

    const ServicesData = [
        {
            title: 'Web Development',
            description: 'Developing dynamic websites with precision, innovation, and a focus on success.',
        },
        {
            title: 'UI/UX design',
            description: 'Designing immersive interfaces for optimal user engagement and satisfaction.',
        },
        {
            title: 'SEO Optimization',
            description: 'Implementing strategic SEO techniques to enhance your websites visibility and search engine rankings.',
        },
    ]

  return (
    <div id='services' className='py-16 '>
        <div className='container mx-auto px-32 text-center'>
            <h2 className='text-3xl md:text-4xl font-bold underline mb-8'>Services</h2>
            <div 
            className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8'>
                {ServicesData.map((service, index) => (
                    <div 
                     key={index} 
                     className='bg-[#1c1a2b] text-white rounded-lg p-6 text-center hover:shadow-lg hover:shadow-gray-500 transition-shadow duration-300'
                     >
                        <FaAppStore className='text-4xl sm:text-5xl lg:text-8xl mb-4 mx-auto'/>
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