import React from 'react'
import "./Skills.css"
import web from "../../assets/web.png"

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I Do</span>
        <span className="skillDesc">I am a skilled and passionate Web Designer with experience in
        creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for details. I am proficient in HTML, CSS and Javascript.
         </span>

         <div className="skillBars">
            <div className="skillBar">
                <img src={web} alt="" className="skillBarImg" />
                <div className="skillBartext">
                    <h2>FrontEnd Development</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nulla!</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={web} alt="" className="skillBarImg" />
                <div className="skillBartext">
                    <h2>FrontEnd Development</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, iusto.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={web} alt="" className="skillBarImg" />
                <div className="skillBartext">
                    <h2>FrontEnd Development</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptatibus.</p>
                </div>
            </div>
         </div>
    </section>
  )
}

export default Skills
