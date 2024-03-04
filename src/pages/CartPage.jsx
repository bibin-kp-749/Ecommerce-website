import React from 'react'
import { useContext } from 'react';
import { Cartvalue } from '../Common/Mycontext';

const CartPage = () => {
    const { cart, setCart } = useContext(Cartvalue)
    console.log(cart);
    return (
        <div >{
            cart.map(e => {
                return (
                    <div className="card  flex  self-center  card-side bg-base-100 max-w-4xl shadow-xl ">
                        <figure><img className='h-24' src={e.url} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{e.type}</h2>
                            <p>{e.type}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Purchace</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default CartPage
