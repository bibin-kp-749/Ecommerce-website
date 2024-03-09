import React from 'react'
import '../css/component.css'

const Cards = ({value}) => {
    return (
        <div >
            <div className="card  w-72 glass p-0 m-5 ">
                <figure><img src={value.url} alt="Furniture Image" className='text-black' /></figure>
                <div className="card-body">
                    <p className='text-black'>{value.caption}</p>
                    <p className='text-black'>PRICE : ₹{value.price}</p>
                    {/* <p className='text-white'>{value.category}</p> */}
                    <br />
                    <div className="card-actions justify-end">
                        <button className="text-gray-400" >View More... </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
