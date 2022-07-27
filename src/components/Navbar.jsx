import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../img/teammaker-logo.svg'

const Navbar = () => {
  return (
    <nav className='sticky top-0 w-full py-2.5 bg-primary-dark z-50'>
      <div className="container mx-auto h-11 flex justify-between px-10 items-center">
        <Link to={'/'} className='w-40 py-3'>
          <img src={Logo} alt="teammaker-logo" />
        </Link>
        <div className="hidden sm:flex space-x-6">
          <Link to={'/register'} className="button-primary">create account</Link>
          <Link to={'/login'} className="button-secondary">login</Link>
        </div>
        <div className="flex sm:hidden">
          <i className='bx bx-menu text-white hover:opacity-75 text-4xl cursor-pointer ease-in-out duration-300'></i>
        </div>
      </div>
    </nav>
  )
}

export default Navbar