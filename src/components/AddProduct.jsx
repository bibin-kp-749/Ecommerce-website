import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const AddProduct = () => {
    const[url,setUrl]=useState('')
    const[category,setCategory]=useState('')
    const[caption,setCaption]=useState('')
    const[type,setType]=useState('')
    const[price,setPrice]=useState('')
    const[name,setName]=useState('')
    const {id}=useParams()
    console.log(id);
    useEffect(()=>{
       axios.get('http://localhost:8000/products').then(res=>res.data.map(e=>{
        if(e.id==id){
          setUrl(e.url);
          setCategory(e.category)
          setCaption(e.caption);
          setName(e.name);
          setPrice(e.price);
          setType(e.type);
        }
       }
       )).catch(err=>console.log(err))
       
    },[])
    console.log(id);
    const Handle=async()=>{
        try{
            await axios.post('http://localhost:8000/products',{category,type,name,caption,price,url:url})
            window.alert("added succesfully")
        }catch(error){
            console.log(error);
        }
    }
    const Update=async()=>{
      try{
        await axios.put(`http://localhost:8000/products/${id}`,{id,category,type,name,caption,price,url})
        alert("updated successfully")
      }catch(error){
        console.log(error);
      }
    }
  return (
    <div>
        <form action="" className='mt-14'>
     <label className="input input-bordered flex items-center gap-2 my-3 mx-32">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
  <input type="url" className="grow" value={url}  placeholder="image-url" onChange={e=>setUrl(e.target.value)}/>
</label> 
<label className="input input-bordered flex items-center gap-2 my-3 mx-32">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" value={category} placeholder="category" onChange={e=>setCategory(e.target.value)}/>
</label>
<label className="input input-bordered flex items-center gap-2m my-3 mx-32">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
  <input type="text" className="grow" value={type} placeholder="type" onChange={e=>setType(e.target.value)}/>
</label>
<label className="input input-bordered flex items-center gap-2 my-3 mx-32">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
  <input type="text" className="grow" value={name} placeholder='Name' onChange={e=>setName(e.target.value)}/>
</label>
<label className="input input-bordered flex items-center gap-2 my-3 mx-32">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
  <input type="text" className="grow" value={caption} placeholder='caption' onChange={e=>setCaption(e.target.value)}/>
</label>
<label className="input input-bordered flex items-center gap-2 my-3 mx-32 ">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
  <input type="number" className="grow" value={price} placeholder='Price' onChange={e=>setPrice(e.target.value)}/>
</label>
<div className='flex my-3 mx-32 justify-start pb-3'>
    <button className={`btn min-w-24 ${id!=undefined?"hidden":null}`} onClick={Handle}>ADD</button>
    <button className={`btn min-w-24 ${id==undefined?"hidden":null}`} onClick={Update}>UPDATE</button>
</div>
</form>
    </div>
  )
}

export default AddProduct
