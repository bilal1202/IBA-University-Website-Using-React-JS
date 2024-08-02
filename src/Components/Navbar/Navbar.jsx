import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Programs</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
             <li> <Link to='testimonials' smooth={true} offset={60} duration={500}> <button className='btn'>Contact us </button> </Link></li>


        </ul>
    </nav>
  )
}

export default Navbar