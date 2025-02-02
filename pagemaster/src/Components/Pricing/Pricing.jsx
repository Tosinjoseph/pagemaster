import React from 'react'
import './Pricing.css'
import logo_chrome from '../../assets/logo-chrome.svg'
import logo_firefox from '../../assets/logo-firefox.svg'
import logo_opera from '../../assets/logo-opera.svg'

const Pricing = () => {
  return (
    <div className='pricing'>
      <p className='head-first'>On olemassa monta eri versiota Lorem Ipsumin kappaleista,<br></br> mutta suurin osa on kärsinyt muunnoksista joissain muodoissa,<br></br> kuten huumorin tai sattumanvaraisesti asetet</p>
      <div className='pricingbox'>
        <div className="pricingbox1 pos1">
        <img src={logo_chrome} alt=''/>
        <h3>Add to chrome</h3>
        <p>Minimum version 62</p>
        <button className='bttn'>Add and install chrome</button>
      </div>
        <div className="pricingbox1 pos2">
        <img src={logo_firefox} alt=''/>
        <h3>Add to firefox</h3>
        <p>Minimum version 63</p>
        <button className='bttn'>Add and install chrome</button>
      </div>
   <div className="pricingbox1 pos3">
        <img src={logo_opera} alt=''/>
        <h3>Add to opera</h3>
        <p>Minimum version 64</p>
        <button className='bttn'>Add and install chrome</button>
       </div>
       </div>
    </div>
  )
}

export default Pricing