import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo-bookmark.svg"
import { Link } from 'react-scroll'


const Navbar = ({formShow,setFormShow}) => {
  return (
    <div className='navbar container'>
        <div className="navlogo"><img src={logo} alt=''/></div>
        <div className='navmenu'>
            <ul>
                <li><Link to="feature" smooth={true}  offset={-300} duration={500} >Feature</Link></li>
                <li><Link to="pricing" smooth={true}  offset={-200} duration={500} >Pricing</Link></li>
                <li><Link to="faqs" smooth={true}  offset={-120} duration={500} >FAQs</Link></li>
                <li><Link to="contact" smooth={true}  offset={-300} duration={500} >Contact</Link></li>
                <li className='login' onClick={()=>setFormShow(true)}>Login</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar