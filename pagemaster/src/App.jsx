import React, { useState } from 'react'
import Navbar from "./Components/Navbar/Navbar.jsx"
import Hero from './Components/Hero/Hero.jsx'
import Title from './Components/Title/Title.jsx'
import Features from './Components/Features/Features.jsx'
import Pricing from './Components/Pricing/Pricing.jsx'
import Faqs from  './Components/Faqs/Faqs.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Login from './Components/Login/Login.jsx'

const App = () => {
 const[formShow,setFormShow]= useState(false)
  return (
    <div>
      <Navbar formShow={formShow} setFormShow={setFormShow}/>
      <div className="container">
      <Hero/>
      <Title setTitle={'Features'}/>
      <Features/>
      <Title setTitle={'Download The Extensions'}/>
      <Pricing/>
      <Title setTitle={'Frequently Asked Questions'}/>
      <Faqs/>
      </div>
      <Contact/>
      <Footer setTopic1={'HOME'}/>
      <Login formShow={formShow} setFormShow={setFormShow}/>
    </div>
  )
}

export default App
