import React from 'react';
import './Footer.css'

const Footer =()=>{
    return(
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <div className="name"><h1>Portfolio</h1></div>
                    <p>I am a frontend developer from. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, blanditiis rem. </p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        
                        <input type="email" placeholder='enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className='footer-bottom-left'>2025 Portfolio. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p> Connect with me</p>
                </div>
            </div>
        </div>
    )
}
export default Footer