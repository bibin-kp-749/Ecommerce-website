import React from 'react'
import AddProduct from '../components/AddProduct'
import AdminProductCard from '../components/AdminProductCard'
import Table from '../components/Table'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
    const navigate=useNavigate()
    const Logout=()=>{
        localStorage.removeItem('id');
        localStorage.removeItem('name')
        navigate('/')
        window.location.reload()
    }
    return (
        <div className='min-h-screen w-screen '>
            <div className='flex justify-end items-center h-10  '>
                <button className=' sm:mr-10 sm:mt-14 h:10 w-20 mr-2 m-5 bg-red-800 sm:w-24 sm:h-10 text-white font-semibold rounded-md' onClick={Logout}>LogOut</button>
            </div>
            <div role="tablist" className="tabs tabs-lifted ">
                <input type="radio" name="my_tabs_2" role="tab" className="tab min-h-14 min-w-32" aria-label="USERS" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 min-h-screen w-96 sm:max-w-max md:min-w-full" >
                    <Table/>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab min-h-14 min-w-32" aria-label="PRODUCTS"  checked/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 min-h-screen ">PRODUCTS
                <AdminProductCard/>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab min-h-14 min-w-32" aria-label="ADD PRODUCTS" />
                <div role="tabpanel" className="tab-content  bg-base-100 border-base-300 rounded-box p-6 min-h-screen sm:w-screen md:min-w-full ">ADD PRODUCTS
                <AddProduct/>
                </div>
            </div>
        </div>
    )
}

export default Admin
