import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import BottomNavbar from '../components/BottomNavbar'
import Cards from '../components/Cards'
import CarouselSelect from '../components/CarouselSelect'
import Subsection from '../components/Subsection'

const HomePage = () => {
  return (
    <div className='flex flex-col justify-center align-middle mb-5'>
      <Carousel/>
      <div>
        <br />
        <h1 className='text-3xl font-semibold'>Our collections</h1>
      </div>
      <BottomNavbar/>
      <Subsection/>
      <CarouselSelect/>
    </div>
  )
}

export default HomePage
