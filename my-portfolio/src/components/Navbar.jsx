import React, { useRef, useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar =() => {
    const [menu, setMenu] = useState("home");
    const menuRef= useRef();

const openMenu= ()=>{
    menuRef.current.style.right="0";
}
const closeMenu= ()=>{
    menuRef.current.style.right="-400px";
}


    return(
        <div className='n-wrapper'>
            <div className="n-left">
                <div className="n-name">PortFolio</div>
                
            </div>
            <div className="n-right">
                
                <div className="n-list">
                    <img src='menu.png' onClick={openMenu} alt='menu' className='nav-menu-open'></img>
                    <ul  ref={menuRef} style={{listStyleType:'none'}}>
                        <img src='menu.png' onClick={closeMenu} alt='menu' className='nav-menu-close'></img>
                        <li><AnchorLink className='anchor-link'  href='#intro'><p onClick ={()=>setMenu("home")}>Home</p></AnchorLink></li>
                        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick ={()=>setMenu("about")}>About</p></AnchorLink></li>
                        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick ={()=>setMenu("services")}>Services</p></AnchorLink></li>
                        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick ={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
                    </ul>
                </div>
                <AnchorLink className='anchor-link' offset={50} href='#contact'><button className="button n-button" onClick ={()=>setMenu("contact")}>Contact US</button></AnchorLink>
            </div>
        </div>
    )
}

export default Navbar