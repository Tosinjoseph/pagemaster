import React from 'react'
import './Footer.css'
import logo from "../../assets/logo-bookmark.svg"
import icon_facebook from "../../assets/icon-facebook.svg"
import icon_twitter from "../../assets/icon-twitter.svg"
import { Link } from 'react-scroll'



const Footer = ({setTopic1}) => {
  return (
    <div className='footer'>
        <div className="footer-logo">
        <img src={logo} alt=''/>
        </div>
 <ul>
    <li><Link to="hero" smooth={true}  offset={-300} duration={500} >{setTopic1}</Link></li>
    <li><Link to="pricing" smooth={true}  offset={-200} duration={500} >PRICING</Link></li>
    <li><Link to="features" smooth={true}  offset={-120} duration={500} >FEATURES</Link></li>
 </ul>
 <div className="footer-social">
    <img src={icon_facebook} alt=''/>
    <img src={icon_twitter} alt=''/>
 </div>
    </div>
  )
}

export default Footer