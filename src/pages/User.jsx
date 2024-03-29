import React, { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Products from './Products'
import Hero from '../components/Hero'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import { Cartvalue } from '../Common/Mycontext'
import CartPage from './CartPage'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Search from './Search'
import Admin from './Admin'
import AddProduct from '../components/AddProduct'


const User = () => {
    const[cart,setCart]=useState([])
    const[search,setSearch]=useState([])
    const[login,setLogin]=useState([])
  return (
    <div>
        <Cartvalue.Provider value={{cart,setCart,search,setSearch,login,setLogin}}>
            <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='products/:id' element={<Hero/>}/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='register' element={<RegisterPage/>}/>
        <Route path='/:id' element={<Hero/>}/>
        <Route path='cart' element={<CartPage/>}/>
        <Route path='search' element={<Search/>}/>
        <Route path='admin' element={<Admin/>}/>
        <Route path='admin/addproduct' element={<AddProduct/>}/>
        {/* <Route path='admin/:id' element={<AddProduct/>}/> */}
      </Routes>
      <Footer/>
      </Cartvalue.Provider>
    </div>
  )
}

export default User
