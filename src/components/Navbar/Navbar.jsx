import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt="" className='logo'/>
      <div className="menu">
       
        <a href='#' className='menuListItem'>Home</a>
        <a href='#skills' className='menuListItem'>About</a>
        <a href='#works' className='menuListItem'>Portfolio</a>
       
      </div>
  
       {/* <Link to="/contact"  className="menuBtn">Contact Me</Link> */}
      <a href="#contact" className="menuBtn">Contact Me</a>
    </nav>
  )
}

export default Navbar
