import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const Hero = () => {
  const{id}=useParams()
  const [value,setValue]=useState([])
  console.log("hello");
  useEffect(()=>{
    axios.get('http://localhost:8000/products').then(res=>setValue(res.data))
   },[])
  return (value&&
    value.map(e=>{
      if(id==e.id){
      return(
        <div>
        <div className="hero min-h-screen p-24 bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">Box Office News!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button className="btn btn-primary">Add To Cart</button>
      </div>
    </div>
  </div>
      </div>
      )}
    })
    
  )
}

export default Hero
