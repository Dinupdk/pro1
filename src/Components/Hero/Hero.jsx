import React from 'react'

import "./Hero.css"
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Resume from '../../assets/Dinesh Kumar Potta.pdf'

const Hero = () => {
  
  return (
    <div id='home' className='hero'>
        <img src={profile_img}/>
        <h1><span>I'm Dinesh</span>, Python developer</h1>
        <p>A highly skilled and versatile Python Developer with 3+ years of experience in developing robust and scalable software solutions. Proficient in a variety of Python frameworks and libraries, with a strong background in web development, data analysis, and API integration. Adept at collaborating with cross-functional teams to deliver high-quality projects on time and within budget.
           Demonstrates exceptional problem-solving abilities and a passion for continuous learning and improvement.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
             <div className="hero-resume"><a href={Resume} download="DineshKumarPotta.pdf">Myresume</a>
            
            
            </div>

            
        </div>
        
    </div>
  )
}

export default Hero