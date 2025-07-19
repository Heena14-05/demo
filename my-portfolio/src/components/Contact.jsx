import React from 'react';
import './Contact.css'

const Contact =() =>{
    return(
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Give in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I'm currently available to talk on new projects, so feel free to send me message about anything you want.</p>
                    <div className="contact-deatils">
                        <div className="contact-detail">
                                <p>greatstackdev@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <p>858-963-987</p>
                        </div>
                        <div className="contact-detail">
                            <p>Jalandhar,Punjab</p>
                        </div>
                    </div>
                </div>
                <form className='contact-right'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='enter your name' name='name' />
                     <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='enter your email' name='email' />
                     <label htmlFor="">Write you message</label>
                    <textarea name='mesg' rows="8" placeholder='enter ypou message'></textarea>
                    <button type="submit" className='content-submit'>Submit</button>
                </form>
            </div>

        </div>
    )
}


export default Contact