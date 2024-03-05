import React from 'react'
import { Link } from 'react-router-dom'
import '../../src/index.css'

const NavLink = () => {
  return (
    <div className=' min-w-96 '>
      <ul className='no-scrollbar flex justify-evenly bg-slate-300 text-red-800 h-10 align-middle overflow-scroll '>
        <li className='flex items-center font-sans min-w-32'>
          <Link to="/products" state={{from:"offers"}}>Offers</Link>
        </li>
        <li className='flex items-center font-sans min-w-32'>
          <Link to="/products" state={{from:"living"}}>Living</Link>
        </li>
        <li className='flex items-center font-sans min-w-32'>
          <Link to="/products" state={{from:"bedrooms"}}>Bedrooms</Link>
        </li>
        <li className='flex items-center font-sans min-w-32'>
          <Link to="/products" state={{from:"dining set"}}>Dining Sets</Link>
        </li>
        <li className='flex items-center font-sans min-w-64'>
          <Link to="/products" state={{from:"office"}}>Study and Office Furniture</Link>
        </li>
        <li className='flex items-center font-sans min-w-32'>
          <Link to="/products" state={{from:"collection"}}>Collections</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavLink
