
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Cards from './components/Cards'
import Carousel from './components/Carousel'
import Header from './components/Header'
import Hero from './components/Hero'
import LoginForm from './components/LoginForm'
import NavLink from './components/NavLink'
import Navbar from './components/Navbar'
import RegistrationForm from './components/RegistrationForm'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Products from './pages/Products'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='products' element={<Products/>}>
          <Route path=':id' element={<Hero/>}/>
        </Route>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='register' element={<RegisterPage/>}/>
      </Routes>
      
     
    </>
  )
}

export default App
