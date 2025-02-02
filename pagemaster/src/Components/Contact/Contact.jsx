import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <h3>35, 000+ already joined</h3>
        <h1>Staying up-to-date with what<br></br> we are doing</h1>
        <div className="contact-submit">
            <input type="text" placeholder='Enter review'/>
            <button className='btn1 contact-btn' type="submit">Contact us</button>
        </div>
    </div>
  )
}

export default Contact