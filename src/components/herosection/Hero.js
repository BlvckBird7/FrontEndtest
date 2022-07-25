import React from 'react'
import "./Hero.css"
import Testimonial from '../../images/Testimonial image 1.png'

const Hero = () => {
  return (
    <div className='container flex flex-col md:flex-row items-center ml-2 mt-10 space-y-0 md:space-y-0 md:pl-20'>
            <div className='flex flex-col mb-32 space-y-12 md:1/2 '>
                <h1 className='max-w-lg text-4xl font-bold text-left md:text-4xl'>Amazing <br/> Experiences from Our Wonderful Customers</h1>
                <p className='max-w-md'>Here is what customers and vendors are saying about us, you can share your stories with us too.</p>
            </div>
            <div className='w-md:full md:ml-60'>
                <div className='w-md:full bg-color'>
                    <img src={Testimonial} alt="testimonial" className="w-md:full" />
                </div>
            </div>
    </div>
  )
}

export default Hero