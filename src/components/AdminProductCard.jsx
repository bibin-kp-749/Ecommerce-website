import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AdminProductCard = () => {
    const[products,setProducts]=useState()
    useEffect(()=>{
        axios('http://localhost:8000/products').then(res=>setProducts(res.data))
    },[])
    const Delete=async(id)=>{
           try{ axios.delete(`http://localhost:8000/products/${id}`)
           console.log("deleted successsfully");
    }catch(err)
    {console.log(err)}
    }
    const Edit=(id)=>{
        try{
           axios.patch(`http://localhost:8000/products/${id}`)
           console.log("edit now");
        }catch(err){
            console.log("check your code");
        }
    }
  return (
    <>
    {
        products&&
        products.map((e,i)=>{
            return(
            <div key={i}>
            <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={e.url} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{e.category}</h2>
          <p>{e.caption}</p>
          <p>{e.price}</p>
          <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={()=>Edit(e.id)}>Edit</button>
            <button className="btn btn-primary" onClick={()=>Delete(e.id)}>Delete</button>
          </div>
        </div>
      </div>
          </div>)
        })
    }
    </>
  )
}

export default AdminProductCard
