import React, { useState } from 'react'
import './Features.css'
import illustration1 from '../../assets/illustration-features-tab-1.svg'


const Features = () => {
    const[featureChange, setFeatureChange] = useState(0)
    const listItems = ["Simple Bookmarking", "Easy Searching", "Easy Sharing"];

  return (
    <div className='features'>
        <p>Ang Lorem Ipsum ay ginagamit na modelo ng industriya ng pagpriprint<br></br> at pagtytypeset. Ang Lorem Ipsum ang naging regular na modelo <br></br>simula pa noong 1500s, noong may isang di kilalang</p>
        <ul>
            <li>Simple Bookmarking</li>
            <li>Easy Searching</li>
            <li>Easy Sharing</li>
        </ul>
       <div className="underline"></div>
       
        <div className="feature"> 
            <div className="feature-img">
                <img src={illustration1} alt=''/>
                <div className='sidecolor2'></div>
                </div>
            <div className="feature-right">
                <h2>Bookmark in one click</h2>
                <p>Ang Lorem Ipsu ginagamit na modelo ng industriya ng pagpriprint<br></br> at pagtytypeset. Ang Lorem Ipsum ang naging regular na modelo <br></br>simula pa noong 1500s, noong may isang di kilalang</p>
                <button className='btn1' type='submit'>More Info</button> 
                

                
            </div>
            
        </div>
    </div>
  )
}

export default Features