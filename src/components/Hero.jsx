import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import '../css/component.css'
import '../App.css'
import { Cartvalue } from '../Common/Mycontext';

const Hero = () => {
  const navigate = useNavigate()
  let flag = false;
  let userid = localStorage.getItem("id")
  const {id} = useParams()
  const { cart, setCart } = useContext(Cartvalue)
  const [carts, setCarts] = useState([])
  const [value, setValue] = useState([])
  const[quantity,setQuantity]=useState(1)
  useEffect(() => {
    axios.get('http://localhost:8000/products').then(res => res.data.map((e) => {
      if (id == e.id) {
        setValue(e)
      }
    }))
    axios.get('http://localhost:8000/cart').then(res => setCarts(res.data))
  }, [])
  const handle = () => {
    carts.map(e => {
      if (e.id == value.id) {
        flag = true;
      }
    })
    if(userid){
    if (flag == false) {
      axios.post(`http://localhost:8000/cart`, { userid: userid,quantity:quantity, ...value }).then(res => console.log(res.data))
        .catch(error => console.log(error))
      setCart([...cart, value])
      window.alert("added to cart")
      navigate('/')
      console.log(value)
    } else if(userid){
      window.alert("item already exist")
    }
  }else{
    window.alert("please login")
  }
  }
  return (
    <div >
      <div className="hero flex justify-center mt-44">
        <div className="hero-content flex-col lg:flex-row border-1 border-solid border-black rounded-md">
          <img src={value.url} className="hero-img w-80 rounded-lg shadow-2xl sm:w-8/12 sm:min-h-80" />
          <div className='sm:w-6/12'>
            <div></div>
            <h1 className="text-2xl font-semibold text-gray-800 font-sans">{value.name}</h1>
            <p className='text-xl font-medium m-2 text-gray-600 font-mono my-5'>{value.caption}</p>
            <div >&nbsp;<button className='text-4xl font-bold text-gray-700 h-6 w-6 pr-3' onClick={()=>(quantity)?setQuantity(pre=>pre-1):null}>-</button>&nbsp;&nbsp;<span className='text-xl font-bold text-gray-400'>{quantity}</span> &nbsp;&nbsp;<button className='text-3xl font-bold text-gray-700 h-6 w-6 pr-3' onClick={()=>setQuantity(pre=>pre+1)}>&nbsp;+</button></div>
            <p className="py-6 text-gray-800 font-bold">₹&nbsp;{quantity*value.price}</p>
            <button className="bg addtocart font-medium p-2 rounded-lg" onClick={handle}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Hero
