import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="CONTACT." text="Let's have a chat"/>
      <Form/>
      <Footer/>
      </div>
  )
}

export default Contact;