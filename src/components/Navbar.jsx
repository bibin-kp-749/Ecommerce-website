import React, { useContext } from 'react'
import '../css/component.css'
import LoginPage from '../pages/LoginPage'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Cartvalue } from '../Common/Mycontext'

const Navbar = () => {
    const {search,setSearch}=useContext(Cartvalue)
    let name=localStorage.getItem('name')
    // console.log(name);
    const navigate=useNavigate()
    return (
        <div id='navbar-section p-0'>
            <div className="navbar  flex bg-red-800 text-white">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">FurPro</a>
                </div>
                <div className="flex-.2 gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" onChange={e=>{
                            setSearch(e.target.value)
                        }}className="input bg-gray-200 text-black input-bordered w-30 h-10 md:w-auto" /><button onClick={()=>navigate('search')}>click</button>
                    </div>
                    <div className="dropdown dropdown-end">
                        <Link to='cart'>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div>
<button className="bg-slate-100 h-8 pb-3 pl-3 pr-3 pt-1  font-medium text-gray-700 rounded-lg m-3" onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      <LoginPage/>
    </form>
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
  </div>
</dialog>
                    </div>
                    <div className="dropdown flex-1 dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {/* <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt=""  className='w-1 h-1'/> */}
                            <p className='text-black'>{name}</p>
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
