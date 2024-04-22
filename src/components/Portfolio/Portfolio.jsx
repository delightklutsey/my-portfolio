import React from 'react'
import "./Portfolio.css"
import food from "../../assets/food.png"
import project2 from "../../assets/project2.png"
import project3 from "../../assets/project3.png"
import project4 from "../../assets/project4.png"
import project5 from "../../assets/project5.png"
import project6 from "../../assets/project6.png"
const Portfolio = () => {
  return (
    <section className="works" id='works'>
        <h2 className="worktitle">My Portfolio</h2>
        <span className="workdesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence. </span>
        <div className="worksImgs">
          <a href="https://food-app-two-sandy.vercel.app/">
            <img src={food} alt="" className="worksImg" />
            </a>

            <a href=" https://delightklutsey.github.io/work1/">
            <img src={project2} alt="" className="worksImg" />
            </a>
            <a href=" https://delightklutsey.github.io/Easybank/">
            <img src={project3} alt="" className="worksImg" />
            </a>

            <a href="https://delightklutsey.github.io/Presentation/">
            <img src={project4} alt="" className="worksImg" />
            </a>

            <a href=" https://delightklutsey.github.io/Second-Project-jesi/">
            <img src={project5} alt="" className="worksImg" />
            </a>
            <a href="https://delightklutsey.github.io/First-Jesi-project/">
            <img src={project6} alt="" className="worksImg" /> 
            </a>
        </div>
    </section>
  )
}

export default Portfolio
