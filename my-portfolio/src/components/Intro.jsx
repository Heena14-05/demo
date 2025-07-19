import React from 'react';
import './Intro.css';

const Intro =() =>{
    return(
        <div id='intro' className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span>Hey! I Am </span>
                    <span>Heena</span>
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                         Iste harum quasi sint pariatur in. </span>
                </div>
                <button className="button i-button">Hire me</button>
            </div>
            <div className='i-right'>
                <img src='/girl1.jpg' alt='girl'></img>
            </div>
        </div>

    )
}
export default Intro