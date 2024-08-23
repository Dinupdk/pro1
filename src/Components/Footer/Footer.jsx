import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import insta from '../../assets/insta.ico'
import linkedin from '../../assets/Linkedin.ico'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo}/>
                <p>I am a frontend developer from Andra pradesh</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon}/>
                    <input type="email" name="" placeholder='Enter Your Email' />
                </div><br />
                <div className="footer-subscribe"><a href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRmVGXtWmKFTWzfvHKFpNRpjxJdsQqwCQHVvHtBJQvwzsrCqHjTrvWSRCnlzsjzCGzvhlgV' target='_blank'>Subscribe</a></div>
            </div>
        </div>
        <hr />
        
        <div className="footer-bottom">
            <p className='footer-bottom-left'>2024 Dinesh Kumar.All rights resereved.</p>
            <div className="footer-bottom-right">
                <p>Term & Conditions</p>
                <p>Privacy & Policy</p>
                <p>Connect with Me</p>
                
                
            </div><br />
            
        </div>
    </div>
  )
}

export default Footer