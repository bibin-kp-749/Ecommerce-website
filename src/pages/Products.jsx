import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Cards from '../components/Cards'
import axios from 'axios'
import '../css/component.css'
import { useParams } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'

const Products = () => {
  const location = useLocation();
  const from = location.state?.from;
  const [value,setValue]=useState([])
  useEffect(()=>{
   axios.get('http://localhost:8000/products').then(res=>setValue(res.data))
  },[])
  return (
    <>
      <div className='products-item flex flex-wrap justify-center justify-evenly mt-24' id='products-item '>
        {value&&
          value.map(e=>{
            if(from==e.category){
            return (
              <Link to={`${e.id}`}><Cards value={e}/></Link>)
            }
          })
        }
        
      </div>
    </>
  )
}

export default Products
