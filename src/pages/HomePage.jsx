import React from 'react'
import HomeSlider from '../components/home/HomeSlider'
import About from '../components/home/About'
// import SecondSlider from '../components/home/SecondSlider'
import Awards from '../components/home/Awards'
import CorporateSocial from '../components/home/CorporateSocial'
import CSR from '../components/home/CorporateSocial'

const HomePage =() => {
  return (
    <div className='homepage'>
        <HomeSlider/>
        <About/>
        {/* <SecondSlider/> */}
        <Awards/>
        <CSR/>
    </div>
  )
}

export default HomePage