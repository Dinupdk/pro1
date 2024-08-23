import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_ico from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import insta from "../../assets/insta.ico"
import linkedin from '../../assets/Linkedin.ico'
/*E:\Dinu Honor 7A\.Learn\React js\pro\src\assets\Linkedin.ico*/
const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "7130a51c-ac55-4712-8834-8c7ecf4e3e06");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };



  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern}/>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm currently avaliable to take on new projects,so feel free to contact. </p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_ico}/><a href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRmVGXtWmKFTWzfvHKFpNRpjxJdsQqwCQHVvHtBJQvwzsrCqHjTrvWSRCnlzsjzCGzvhlgV' target='_blank'><p>pdkXXXX@gmail.com</p></a>
                    </div>
                    
                    <div className="contact-detail">
                        <img src={insta}/><a href='https://www.instagram.com/dineshpdk789?igsh=MWF1NzI1aThva204dg==' target='_blank'><p>dineshpdk789</p></a>
                    </div>
                    <div className="contact-detail">
                        <img src={linkedin}/><a href='https://www.linkedin.com/in/dinesh-kumar-a79535314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'><p>Dinesh Kumar</p></a>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon}/><p>+91 701XXXXX46</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon}/><p>Dharmavaram,Ananthapur,A.P</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter Your Name" name="name" id="" />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your Email' name="email" id="" />
                <label htmlFor="">Write Your Message Here</label>
                <textarea name="message" rows='8' placeholder='Enter Your Message'></textarea>
                <button type="submit"className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact