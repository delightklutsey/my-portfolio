import React from 'react'
import "./Intro.css"
import me from "../../assets/me.png"
import { Link } from 'react-router-dom'
const Intro = () => {
  return (
   <section id="intro">
    <div className="introContent">
         <span className="hello">Hello</span>
         <div className="introText">I'm <span className='introName'>Delight</span> <br/> FrontEnd Developer</div>
         <p className="introPara">I'm a skilled Website Developer with experience in creating   <br/>  visually appealing and user-friendly websites.</p>
         <button className="btn">Hire me</button>
    </div>
   

    <img src={me} alt="profile" className="bg" />
   </section>
  )
}

export default Intro
