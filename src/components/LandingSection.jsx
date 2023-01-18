import React from 'react'
import img from '../assests/dp.JPG'
import './LandingSection.css'

const LandingSection = () => {
    const person = {
        greeting: "Hello, I am Muhammad!",
        stack: "A frontend developer",
        specialization: "specialized in React"
    }

  return (
    <div className='landing-container'>
        <img src={img} alt="profile_pic" className='dp'/>
        <h3 className='greet'>{person.greeting}</h3>
        <p className='stack'>{person.stack}</p>
        <p className='sp'>{person.specialization}</p>
    </div>
  )
}

export default LandingSection