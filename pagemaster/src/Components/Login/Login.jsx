import React, { useState } from 'react'
import './Login.css'
import form_back from '../../assets/form-back.png'

const Login = ({formShow,setFormShow}) => {
  const[changeForm, setChangeForm] = useState("Sign Up")
  return (
    <div className={`login-container ${formShow? '': 'hide'}`} >
        <form>
                 <h2>{changeForm}</h2>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Input Your Name' required/>
                <label>Your Password</label>
                <input type='password' name='password' placeholder='Input Your Password' required/>
               {changeForm==='Login' ? <div></div> : <label>Your Email</label>}
               {changeForm==='Login' ? <div></div> : <input type='email' name='email' placeholder='Input Your Email' required/> }
               {changeForm==='Sign Up' ? <div></div> : <p>Lost password?  <a href =''> Click here</a></p>}
                <div className="two-button">
                <button onClick={()=> setChangeForm('Sign Up')} type='submit' className={changeForm==='Sign Up'?'grey-btn btn1 form-btn':'btn1 form-btn' }>Sign Up</button>
                <button onClick={()=> setChangeForm('Login')} type='submit' className={changeForm==='Login'?'grey-btn btn1 form-btn':'btn1 form-btn' }>Login</button>
                </div>
                 </form>
           <div className='form-back' onClick={()=>setFormShow(false)}><img src={form_back} alt=''/></div>
      
    </div>
  )
}

export default Login