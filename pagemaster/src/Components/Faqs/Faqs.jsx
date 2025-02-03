import React, { useState } from 'react'
import './Faqs.css'
import icon_arrow from '../../assets/icon-arrow.svg'


const Faqs = () => {
    const[dropDown, setDropDown] = useState(false);
    const[dropDown1, setDropDown1] = useState(false)
    
  return (
    <div className='faqs'>
    <p className='head-first'>et teha trükinäidist. Lorem Ipsum ei ole ainult viis sajandit<br></br> säilinud, vaid on ka edasi kandunud elektroonilisse trükiladumisse,<br></br> jäädes sealjuures peaaegu</p>
    <div className="underline"></div>
    <div className="question">
      <p>What is Bookmark?</p>
      <div className="dropdown-1">
      <img src={icon_arrow} alt='' onClick={()=>setDropDown(true)}/>
      <div className= {dropDown1===true? "dropdown-content-1" : 'dropdown-content-hide'}  onClick={()=>setDropDown1(false)}>
        <p>tte nagu korduvatel sõnadel "sisu siin, sisu siin", nähes välja nagu tavaline</p>
      </div>
      </div>
    </div>
    <div className="underline"></div>
    <div className="question">
      <p>How can i request new browser?</p>
      <img src={icon_arrow} alt=''/>
    </div>
    <div className="underline"></div>
    <div className="question">
      <p>Is there a mobile App?</p>
       <img src={icon_arrow} alt=''/>
    </div>
    <div className="underline"></div>
    <div className="question">
      <p>What about other Chrome browser?</p>
      <div className="dropdown">
      <img src={icon_arrow} alt='' onClick={()=>setDropDown(true)}/>
      <div className= {dropDown===true? "dropdown-content" : 'dropdown-content-hide'}  onClick={()=>setDropDown(false)}>
        <p>tte nagu korduvatel sõnadel "sisu siin, sisu siin", nähes välja nagu tavaline</p>
      </div>
      </div>
    </div>
    <div className="underline"></div>
    <button className='faqs-btn' type='submit'>More info</button>
  </div>
)
}



export default Faqs