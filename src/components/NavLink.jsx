import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = () => {
  return (
    <div>
      <ul className='flex justify-evenly bg-slate-300 text-red-800 h-10 align-middle'>
        <li>
          <Link to="/products" state={{from:"offers"}}>Offers</Link>
        </li>
        <li>
          <Link to="/products" state={{from:"living"}}>Living</Link>
        </li>
        <li>
          <Link to="/products" state={{from:"bedrooms"}}>Bedrooms</Link>
        </li>
        <li>
          <Link to="/products" state={{from:"dining set"}}>Dining Sets</Link>
        </li>
        <li>
          <Link to="/products" state={{from:"office"}}>Study and Office Furniture</Link>
        </li>
        <li>
          <Link to="/products" state={{from:"collection"}}>Collections</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavLink
