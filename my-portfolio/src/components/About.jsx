import React from 'react';
import './About.css';

const About =()=> {
    return(
        <div id='about' className='about'>
            <div className='about-title'>
                <h1>About Me</h1>
               
            </div>
            <div className="about-section">
                <div className="about-left">
                     <img src="girl2.jpg" alt="girl2" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, consequuntur?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi natus distinctio repellendus veniam eum voluptatem magnam necessitatibus. Laborum, distinctio quidem?</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}></hr></div>
                        <div className="about-skill"><p>React Js</p><hr style={{width:"50%"}}></hr></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}></hr></div>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About