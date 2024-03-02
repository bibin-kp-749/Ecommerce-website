import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import BottomNavbar from '../components/BottomNavbar'
import Cards from '../components/Cards'

const HomePage = () => {
  return (
    <div>
        <p className='home-text text-black text-4xl fixed font-semibold'>Hello Guyzz</p>
      <Header/>
      <Carousel/>
      <BottomNavbar/>
      <div className='flex'>
        <Cards/>
      </div>
    </div>
  )
}

export default HomePage
