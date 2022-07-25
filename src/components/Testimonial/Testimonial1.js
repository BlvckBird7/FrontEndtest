import React from 'react'
import testimonialDic from './testimonialDic'
import TestimonialCard from './TestimonialCard'


const showCard = (card) =>{
    return <TestimonialCard 
    key={card.img}
    img={card.img}
    location={card.location}
    name={card.name}
    btn={card.rel}
    description={card.desc}
    />
}

const Testimonial1 = () => {
  return (
    <div className='grid gap-y-10 md:gap-x-60 md:gap-y-20 md:grid-cols-3 grid-rows-3 px-20 pt-20 place-content-center'>
        {testimonialDic.map(showCard)}
    </div>
  )
}

export default Testimonial1