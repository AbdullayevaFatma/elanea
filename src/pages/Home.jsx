import React from 'react'
import Hero from '../components/Hero'
import Info from '../components/Info'
import NewArrivals from '../components/NewArrivals'
import Exclusive from '../components/Exclusive'
import Testimonials from '../components/Testimonials'
import hero from "../assets/hero-img.jpg"

const Home = () => {
  return (
    <>
    <Hero img={hero} title="hero" position="center" showNavbar={true}/>
    <NewArrivals/>
    <Exclusive/>
    <Testimonials/>
    <Info/>
    </>
  )
}

export default Home