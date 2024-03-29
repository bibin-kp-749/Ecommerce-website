import React, { useContext, useEffect, useState } from 'react'
import { Cartvalue } from '../Common/Mycontext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const navigate = useNavigate()
    const { search, setSearch } = useContext(Cartvalue)
    const [values, setValue] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/products').then(res => setValue(res.data))
    }, [])
    return (
        <div className='flex flex-wrap justify-evenly mt-24'>
            {
                values && values.map((e, i) => {
                    if (e.caption.toLowerCase().includes(search.toLowerCase())) {
                        return (
                            <div key={i} className="card w-80 glass p-0 m-5">
                                <figure><img src={e.url} alt="Furniture Image" className='text-black' /></figure>
                                <div className="card-body">
                                    <p className='text-black'>{e.caption}</p>
                                    <p className='text-black'>PRICE : ₹{e.price}</p>
                                    <br />
                                    <div className="card-actions justify-end">
                                        <button className="  text-gray-600" onClick={() => navigate(`/products/${e.id}`)}>view more</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default Search
