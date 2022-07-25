import React from 'react'
import { Link } from "react-router-dom"


const Navbar2 = () => {
  return (
    <>
        <nav className="hidden md:flex justify-center space-x-12 shadow">
        <Link to="/aboutus" className='hover:border py-2 px-3'>MARKET PLACE</Link>
        <Link to="/stories" className='hover:border py-2 px-3'>WHOLESALE CENTER</Link>
        <Link to="/contact" className='hover:border py-2 px-3'>SELLER CENTER</Link>
        <Link to="/login" className='hover:border py-2 px-3'>SERVICES</Link>
        <Link to="/login" className='hover:border py-2 px-3'>INTERSHIP</Link>
        <Link to="/login" className='hover:border py-2 px-3'>EVENT</Link>

      </nav>
    </>
  )
}

export default Navbar2