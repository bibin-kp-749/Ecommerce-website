import React, { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import HomePage from './HomePage'
import NavLink from '../components/NavLink'
import AddProduct from '../components/AddProduct'
import AdminProductCard from '../components/AdminProductCard'
import axios from 'axios'
import Table from '../components/Table'

const Admin = () => {
    return (
        <div className='min-h-screen'>
            <div role="tablist" className="tabs tabs-lifted pt-4">
                <input type="radio" name="my_tabs_2" role="tab" className="tab min-h-14 min-w-32" aria-label="USERS" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 min-h-screen">
                    <Table/>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab min-h-14 min-w-32" aria-label="PRODUCTS" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 min-h-screen">PRODUCTS
                <AdminProductCard/>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab min-h-14 min-w-32" aria-label="ADD PRODUCTS" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 min-h-screen">ADD PRODUCTS
                <AddProduct/>
                </div>
            </div>
        </div>
    )
}

export default Admin
