import React from 'react'
import './Login.css'
import form_back from '../../assets/form-back.png'

const Login = ({formShow,setFormShow}) => {
  return (
    <div className={`login-container ${formShow? '': 'hide'}`} >
        <form>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Input Your Name' required/>
                <label>Your Phone Number</label>
                <input type='number' name='phone' placeholder='Input Your Mobile Number' required/>
                <button type='submit' className='btn1 form-btn'>Submit now</button>
                 </form>
           <div className='form-back' onClick={()=>setFormShow(false)}><img src={form_back} alt=''/></div>
      
    </div>
  )
}

export default Login