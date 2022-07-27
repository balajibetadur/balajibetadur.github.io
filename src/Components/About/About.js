import React from 'react'
import './About.css'
import { Fade } from 'react-reveal'

function About() {
  return (
    <div className='about'>
      <Fade bottom>

        <div className="about__text">
          <p>About Me</p>
        </div>
      </Fade>
      <div className="about__container">

        About
      </div>
    </div>
  )
}

export default About