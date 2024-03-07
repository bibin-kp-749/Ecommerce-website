import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AdminProductCard = () => {
  const [products, setProducts] = useState()
  const [category, setCategory] = useState("all")
  useEffect(() => {
    axios('http://localhost:8000/products').then(res => setProducts(res.data))
  }, [])
  const Delete = async (id) => {
    try {
      axios.delete(`http://localhost:8000/products/${id}`)
      console.log("deleted successsfully");
    } catch (err) { console.log(err) }
  }
  // const Edit = (id) => {
  //   try {
  //     axios.patch(`http://localhost:8000/products/${id}`)
  //     console.log("edit now");
  //   } catch (err) {
  //     console.log("check your code");
  //   }
  // }
  return (
    <>
      <div className='mb-12'>
        <ul className='flex justify-between h-10 bg-white items-center'>
          <li className='flex-1' onClick={() => setCategory("offers")}>Offers</li>
          <li className='flex-1' onClick={() => setCategory("living")}>Living</li>
          <li className='flex-1' onClick={() => setCategory("bedrooms")}>Bedrooms</li>
          <li className='flex-1' onClick={() => setCategory("dining set")}>Dining Sets</li>
          <li className='flex-1' onClick={() => setCategory("office")}>Study and Office Furniture</li>
          <li className='flex-1' onClick={() => setCategory("collection")}>Collections</li>
        </ul>
      </div>
      {
        products &&
        products.map((e, i) => {
          if (category == "all") {
            return (
              <div key={i} className='mb-8 flex justify-center md:4/6'>
                <div className="card card-side bg-base-100 shadow-xl flex flex-wrap p-0 rounded-md sm:w-5/6 md:2/6">
                  <figure className='max-w-full'><img src={e.url} alt="Movie" className='w-full rounded-md sm:w-60 md:w-full md:h-72' /></figure>
                  <div className="card-body sm:flex-1 md:flex-1">
                    <h2 className="card-title">{e.name}</h2>
                    <p>{e.caption}</p>
                    <p>{e.price}</p>
                    <div className="card-actions justify-end">
                    <Link to={`addproduct/${e.id}`}><button className="btn btn-primary" >Edit</button></Link>
                      <button className="btn btn-primary" onClick={() => Delete(e.id)}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>)
          } else if (e.category == category) {
            return (
              <div key={i} className='mb-8 flex justify-center md:4/6'>
                <div className="card card-side bg-base-100 shadow-xl flex flex-wrap p-0 rounded-md sm:w-5/6 md:2/6">
                  <figure className='max-w-full'><img src={e.url} alt="Movie" className='w-full rounded-md sm:w-60 md:w-full md:h-72' /></figure>
                  <div className="card-body sm:flex-1 md:flex-1">
                    <h2 className="card-title">{e.name}</h2>
                    <p>{e.caption}</p>
                    <p>{e.price}</p>
                    <div className="card-actions justify-end">
                      <Link to={`addproduct/${e.id}`}><button className="btn btn-primary" >Edit</button></Link>
                      <button className="btn btn-primary" onClick={() => Delete(e.id)}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          } else {
            null
          }
        })
      }
    </>
  )
}

export default AdminProductCard
