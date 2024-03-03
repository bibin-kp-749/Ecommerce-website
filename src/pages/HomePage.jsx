import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import BottomNavbar from '../components/BottomNavbar'
import Cards from '../components/Cards'
import CarouselSelect from '../components/CarouselSelect'

const HomePage = () => {
  return (
    <div>
        <p className='home-text text-black text-4xl fixed font-semibold'>Hello Guyzz</p>
      <Header/>
      <Carousel/>
      <div>
        <h1>Our collections</h1>
      </div>
      <BottomNavbar/>
      {/* <div className='flex'>
        <Cards/>
      </div> */}
      <CarouselSelect/>
    </div>
  )
}

export default HomePage
