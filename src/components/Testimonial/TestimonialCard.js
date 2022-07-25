import React from 'react'
import Button from '../utilies/Button'

const TestimonialCard = (props) => {
  return (
    <div className="max-w-md">
        <img src={props.img} alt="testimonial"/>
        <h3>{props.name}</h3>
        <div className='flex space-x-10'>
            <h4>{props.location}</h4>
            <Button className="px-5 text-green-800 bg-green-50" btnName={props.btn}/>
        </div>
        <p>{props.description}</p>
    </div>
  )
}

export default TestimonialCard