import React from 'react'
import { Link } from "react-router-dom"
import Logo from '../../images/logo.png'

const Navbar1 = () => {
  return (
    <nav className='relative container px-4 pt-5 md:px-20'>
  <div className='flex justify-between'>
    <Link to="/"><img src={Logo} alt="logo" /></Link>
      <div className="hidden md:flex justify-end space-x-6">
        <Link to="/aboutus" className=''>ABOUT US</Link>
        <Link to="/stories" className=''>STORIES</Link>
        <Link to="/contact" className=''>CONTACT</Link>
        <Link to="/login" className=''>LOG IN</Link>
        <Link to="/signup" className='rounded-full bg-[#FF5C00] px-3'>SIGN UP</Link>
      </div>
  </div>
</nav>
  )
}

export default Navbar1