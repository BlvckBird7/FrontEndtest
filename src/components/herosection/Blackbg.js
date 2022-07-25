import React from 'react'
import BlackImg from '../../images/black-beautiful-ladies-smiling 1.png'
import Button from '../utilies/Button'

const Blackbg = () => {
  return (
    <div className='container flex flex-col-reverse  bg-black text-white md:flex-row md:justify-between space-y-0 md:space-y-0 md:pl-20'>
            <div className='rounded bg-red pt-10'>
                <img src={BlackImg} alt="black-beautiful-ladies-smiling" />
            </div>
            <div className='px-20 pt-40'>
                <h3 className='text-2xl'>Tolu & Joy’s Experience</h3>
                <Button className='border px-4 rounded my-4' btnName="Customer" />
                <p className="max-w-lg">I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
                <Button className="my-6 flex justify-center align-center" btnName="Share Your Story" />
            </div>
    </div>
  )
}

export default Blackbg