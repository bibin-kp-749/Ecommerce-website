import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState,useEffect,useContext } from 'react'
import axios from 'axios'
import '../css/component.css'
import { Cartvalue } from '../Common/Mycontext';

const Hero = () => {
  let userid=localStorage.getItem("id")
  let name=localStorage.getItem("name")
   console.log(userid,name);
  const id=useParams()
  const{cart,setCart}=useContext(Cartvalue)
  const [value,setValue]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:8000/products').then(res=>res.data.map((e)=>{
      if(id.id==e.id){
        setValue(e)
      }
    }))
   },[])
   console.log(value);
    const handle=()=>{
    axios.post(`http://localhost:8000/person/${userid}`,{cart:value}).then(res=>console.log(res.data))
    .catch(error=>console.log(error))
        setCart([...cart,value])
        window.alert("added to cart")
        console.log(value);
    }
      return(
        <div >
        <div className="hero bg-white min-h-screen p-24 ">
    <div className="hero-content  flex-col lg:flex-row border-1 border-solid border-black rounded-md">
      <img src={value.url} className="hero-img min-h-2.5 rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-2xl font-semibold">{value.caption}</h1>
        <p className="py-6">{value.price}</p>
        <button className="btn btn-primary" onClick={handle}>Add To Cart</button>
      </div>
    </div>
  </div>
      </div>
      )}


export default Hero
