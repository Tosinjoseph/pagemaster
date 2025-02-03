import React, { useState } from 'react'
import './Navbar.css'
import logo from "../../assets/logo-bookmark.svg"
import { Link } from 'react-scroll'
import navi_icon from '../../assets/navi-icon.png'


const Navbar = ({formShow,setFormShow}) => {
  const[mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu =()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <div className='navbar container'>
        <div className="navlogo"><img src={logo} alt=''/></div>
        <div className='navmenu'>
           <ul className={mobileMenu? '' : 'hide-menu'} >
                <li><Link to="feature" smooth={true}  offset={-300} duration={500} >Feature</Link></li>
                <li><Link to="pricing" smooth={true}  offset={-200} duration={500} >Pricing</Link></li>
                <li><Link to="faqs" smooth={true}  offset={-120} duration={500} >FAQs</Link></li>
                <li><Link to="contact" smooth={true}  offset={-300} duration={500} >Contact</Link></li>
                <li className='login' onClick={()=>setFormShow(true)}>Login</li>
            </ul>
            <img src={navi_icon} alt='' className='menu-icon' onClick={toggleMenu}/>
        </div>
    </div>
  )
}

export default Navbar