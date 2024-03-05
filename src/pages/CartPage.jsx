import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

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
        <div style={{marginTop:'10rem'}}>{
           carts.map((e,i) => {
                if(e.userid==userid){
                return (
                    <div key={i} className="card  flex  self-center  card-side bg-gray-100 max-w-4xl shadow-xl ml-24">
                        <figure><img className='h-24' style={{minHeight:"15rem",minWidth:"15rem"}} src={e.url} alt="Movie" /></figure>
                        <div className="card-body">
                            <div><h2 className='text-2xl font-bold text-gray-800'>{e.type}</h2>
                            <p className='text-gray-600 text-lg '>{e.caption}</p></div> 
                            <div>
                                <p>Quantity : {e.quantity}</p>
                                <p className='text-xl font-bold text-gray-400'>PRICE - ₹{e.quantity*e.price} </p>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn bg-red-800 text-white" onClick={()=>{
                                    axios.delete(`http://localhost:8000/cart/${e.id}`).then(res=>navigate('/'))
                                }}>DELETE</button>
                            </div>
                        </div>
                    </div>
                )
            }
            console.log(price);
            })}
            <div style={{marginTop:'6rem',marginBottom:'1rem'}} ><p className='text-black font-medium'>TOTAL PRICE : ₹{totalprice}</p></div>
            <button className="purchase-btn bg-red-800">Purchace</button>
        </div>

    )
}

export default CartPage
