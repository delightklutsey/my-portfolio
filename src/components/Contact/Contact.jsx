import React from 'react'
import "./Contact.css"
import facebook_icon from "../../assets/facebook_icon.png"
import twitter_icon from "../../assets/twitter_icon.png"
import linkedin_icon from "../../assets/linkedin_icon.png"
const Contact = () => {
  return (
    <section className="contactPage">
        <div className="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form className="contactForm">
                <input type="text" className="name"placeholder='Your Name' />
                <input type="email" className="email"placeholder='Your Email' />
                <textarea name="message" rows="5" className="msg" placeholder='Your Message'></textarea>
                <button type='submit' value="send" className="submitBtn">Submit</button>
                <div className="links">
                    <img src={facebook_icon} alt="" className="link" />
                    <img src={twitter_icon} alt="" className="link" />
                    <img src={linkedin_icon} alt="" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
