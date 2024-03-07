import React, { useState } from 'react'
import './App.css'
import { Cartvalue } from './Common/Mycontext'
import AddProduct from './components/AddProduct'
import Hero from './components/Hero'
import Admin from './pages/Admin'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Products from './components/Products'
import RegisterPage from './pages/RegisterPage'
import Search from './components/Search'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'


function App() {
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState([])
  const [isUser, setIsUser] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const existUser = localStorage.getItem("id")

  return (
    <>


      <div>
        <Cartvalue.Provider value={{ cart, setCart, search, setSearch, setIsUser, isUser, isAdmin, setIsAdmin }}>
          <Header />
          <Routes>

            {existUser=="0001" ? <Route path='/admin' element={<Admin />} /> : null}
            <Route path='/' element={<HomePage />} />
            <Route path='products' element={<Products />} />
            <Route path='products/:id' element={<Hero />} />
            {existUser ? "/" : <Route path='login' element={<LoginPage />} />}
            <Route path='register' element={<RegisterPage />} />
            <Route path='cart' element={<CartPage />} />
            <Route path='search' element={<Search />} />
            <Route path='admin/addproduct' element={<AddProduct />} />
            <Route path='admin/addproduct/:id' element={<AddProduct/>}/>
          </Routes>
          <Footer />
        </Cartvalue.Provider>
      </div>




    </>
  )
}

export default App
