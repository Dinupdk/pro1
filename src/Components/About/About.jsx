import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern}/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced in Python Developer and Fullstack Developer with over a 2 years of professional experience in the field.Throughout my career,I want to success in this field</p>
                    <p>My Passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project</p>
                </div>
                <div  className="about-skills">
                    
                    <div className="about-skill"><p>React JS         </p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Python           </p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Java Script      </p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>MongoDB          </p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>MySQL,MSSQL Server </p><hr style={{width:"70%"}}/></div>
                </div>
            </div>
        </div>
        <div className="above-achievements">
            <div className="about-achievement"><h1>3+</h1><p>Years Of Experience</p></div>
            <hr />
            <div className="about-achievement"><h1>15+</h1><p>Projects completed</p></div>
            <hr/>
            <div className="about-achievement"><h1>5+</h1><p>Running Projects</p></div>
        </div>
    </div>
  )
}

export default About