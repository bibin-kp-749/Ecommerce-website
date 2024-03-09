import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../css/component.css'

const CartPage = () => {
    const navigate=useNavigate()
    const userid=localStorage.getItem('id');
    let price=[]
    const [totalprice,setTotalprice]=useState(0)
    const[carts,setCarts]=useState([])
    useEffect(()=>{
        let totalPrice=0;
            axios.get('http://localhost:8000/cart').then(res=>{setCarts(res.data)
            res.data.forEach(e=>{
                if(e.userid==userid){
                    totalPrice+=e.quantity*e.price;
                }
            })
            setTotalprice(totalPrice)

    }
            )
    },[])
    return (
        <div className='mt-48 flex flex-col items-center'>{
           carts.map((e,i) => {
                if(e.userid==userid){
                return (
                    <div key={i} className="card  flex  self-center  rounded-none card-side bg-gray-100 justify-center flex-wrap mt-5 sm:w-5/6">
                        <figure><img className='h-24 w-80 h-60 rounded-md sm:min-h-64 sm:min-h-96' src={e.url} alt="Movie" /></figure>
                        <div className="card-body ">
                            <div><h2 className='text-2xl font-bold text-gray-800'>{e.type}</h2>
                            <p className='text-gray-600 text-lg '>{e.caption}</p></div> 
                            <div>
                                <p>Quantity : {e.quantity}</p>
                                <p className='text-xl font-bold text-gray-400'>PRICE - ₹{e.quantity*e.price} </p>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn cartbtn " onClick={()=>{
                                    axios.delete(`http://localhost:8000/cart/${e.id}`).then(res=>window.location.reload())
                                }}>DELETE</button>
                            </div>
                        </div>
                    </div>
                )
            }
            console.log(price);
            })}
            <div className='my-12'><p className='text-black font-medium'>TOTAL PRICE : ₹{totalprice}</p></div>
            <button className="purchase-btn cartbtn max-w-72 min-h-14">Purchace</button>
        </div>

    )
}

export default CartPage
