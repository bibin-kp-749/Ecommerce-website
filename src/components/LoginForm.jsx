import React from 'react'
import axios from 'axios'
import  { useEffect ,useState} from 'react'

const LoginForm = () => {
  const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/person')
        .then(res=>{
        //   console.log(res.data);
          setData(res.data);
        })
    },[])
    const submit=()=>{
        let count=0;
          data.filter(element=>{
            if(element.email==email&&element.password==password){
                console.log(element.email,email);
                count=1;
            }
          });
          (count==1)?window.alert("Login successfully"):window.alert("email and password doesn't match");
          setEmail(''),setPassword('')
    }
  return (
    <div>
        <label className="input reg-input input-bordered flex items-center gap-2 mb-4  bg-white rounded-sm border-red-800">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" value={email} onChange={e=>{
    setEmail(e.target.value)
  }} required/>
</label>
      <label className="input reg-input input-bordered flex items-center gap-2 mb-4 bg-white rounded-sm border-red-800">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
  <input type="password" className="grow"  placeholder='Password' value={password}   onChange={e=>{
    setPassword(e.target.value)
    console.log(password);
  }}/>
</label>
<div className='flex justify-start '>
<button className="btn login-btn w-40  bg-red-800 btn-xs sm:btn-sm md:btn-sm lg:btn-md" onClick={submit}>Login</button>
</div>
    </div>
  )
}

export default LoginForm
