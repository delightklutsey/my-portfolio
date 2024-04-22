import React from 'react'
import "./Contact.css"
import facebook_icon from "../../assets/facebook_icon.png"
import twitter_icon from "../../assets/twitter_icon.png"
import linkedin_icon from "../../assets/linkedin_icon.png"
const Contact = () => {
  return (
    <section className="contactPage">
        <div className="contact" id='contact'>
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form className="contactForm">
                <input type="text" className="name"placeholder='Your Name' />
                <input type="email" className="email"placeholder='Your Email' />
                <textarea name="message" rows="5" className="msg" placeholder='Your Message'></textarea>
                <button type='submit' value="send" className="submitBtn">Submit</button>
                <div className="links">
                  <a href="https://www.facebook.com/profile.php?id=61557049505525&mibextid=LQQJ4d" target="blank"> 
                    <img src={facebook_icon} alt="" className="link" />
                    </a>
                    <a href="https://twitter.com/@Delightklenam" target='blank'>
                    <img src={twitter_icon} alt="" className="link" />
                    </a>
                    <a href="https://www.linkedin.com/in/klutsey-delight" target='blank'>
                    <img src={linkedin_icon} alt="" className="link" />
                    </a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
