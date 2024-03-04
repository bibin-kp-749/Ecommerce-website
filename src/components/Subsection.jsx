import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Cards from './Cards';

const Subsection = () => {
    const location = useLocation();
    const from = location.state?.from;
    const [value,setValue]=useState([])
  useEffect(()=>{
   axios.get('http://localhost:8000/products').then(res=>setValue(res.data))
  },[])
  return (
    <div className='flex flex-wrap'>
      {value&&
          value.map(e=>{
            if(e.type===from){  
            return <Link to={`${e.id}`}><Cards value={e}/></Link>
            }
          })
        }
    </div>
  )
}

export default Subsection
