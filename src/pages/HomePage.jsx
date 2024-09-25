import React from 'react'
import HomeSlider from '../components/home/HomeSlider'
import About from '../components/home/About'
import SecondSlider from '../components/home/SecondSlider'

const HomePage =() => {
  return (
    <div>
        <HomeSlider/>
        <About/>
        {/* <SecondSlider/> */}
    </div>
  )
}

export default HomePage