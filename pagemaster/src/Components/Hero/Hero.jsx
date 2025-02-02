import React, { useState } from 'react'
import './Hero.css'
import illustration_hero from '../../assets/illustration-hero.svg'

const Hero = () => {
    const[buttonChange1, setButtonChange1] = useState(false);
    const[buttonChange2, setButtonChange2] = useState(true);
  return (
    <div className='hero container'>
        <div className="heroleft">
            <h1>A Simple Bookmark Manager</h1>
            <p>Schriftindustrie. Lorem Ipsum ist in der Industrie bereits<br></br> der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll<br></br> Wörter nahm und diese durcheinander </p>
            <div className="btn">
                <button onClick={()=> setButtonChange1(true)} className={buttonChange1===true? 'greybtn' : 'btn1'} type='submit'>Get on chrome</button>
                <button onClick={()=> setButtonChange2(true)} className={buttonChange2===true? 'greybtn' : 'btn2'} type='submit'>Get on firefox</button>
            </div>
        </div>
        <div className="heroright">
            <img src={illustration_hero} alt=''/>
            <div className='sidecolor'></div>
        </div>
    </div>
  )
}

export default Hero