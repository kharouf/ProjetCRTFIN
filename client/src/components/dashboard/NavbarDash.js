import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const NavbarDash = () => {
  // / chnage bacground navbar
  const [navbar, setNavbar] = useState(false);
  const changeNavbar = () => {
    window.scrollY >= 80 ? setNavbar(true) : setNavbar(false);

  }
  window.addEventListener('scroll', changeNavbar)

  // ///////////////////////////////////////////////////////////

   
  return (
    <div className= 'Navbaractive Navbar'>
        <div className='Navbar-logo'>
          <Link to="/"><img src={logo} alt='logo' /></Link>
        </div>
        <div className= "Navbar-links">
          <a className='link' href="/#" >الرئيسية</a>
          <a className='link' href="/#about" >من نحن</a>
          <a className='link' href="/#evenement">الأخبار و النشاطات</a>
          <a className='link' href="/#comite">أعضاء الجمعية</a>
          <a className='link' href="/#principes">مبادئنا</a>
          <a className='link' href="/#programs" >برامجنا</a>
          <a className='link' href="/#contact">إتصل بنا</a>
        </div>
        </div>
  )
}

export default NavbarDash