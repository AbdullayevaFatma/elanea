import React from 'react'
import Hero from '../components/Hero'
import aboutImage from "../assets/about-img.jpg"
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <>
    <Hero img={aboutImage} title="about-image" position="center" showNavbar={true}/>
    <AboutContent/>
    </>
  )
}

export default About