import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll'


const Navbar = () => {

const[mobileMenu, setmobileMenu]=useState(false);
  const toggleMenu=()=>{
    mobileMenu? setmobileMenu(false) :setmobileMenu(true);

}

  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu?'' : 'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Programs</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
             <li> <Link to='testimonials' smooth={true} offset={60} duration={500}> <button className='btn'>Contact us </button> </Link></li>


        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar