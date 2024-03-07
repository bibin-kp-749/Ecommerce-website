import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

const Table = () => {
    const[users,setUsers]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/person')
        .then(res=>setUsers(res.data))
        .catch(error=>console.log(error))
    },[])
    const Delete=async(id)=>{
        try{
            await axios.delete(`http://localhost:8000/person/${id}`)
            alert("person is deleted")
            window.location.reload();
        }catch(error)
        {
            console.log(error);
        }
    }
    const Block=async(id,current)=>{
        try{
            await axios.patch(`http://localhost:8000/person/${id}`,{status:!current})
            // window.location.reload();
            console.log(current,"hi");
        }catch(error){
            console.log(error);
        }
        window.location.reload()    }
    console.log(users);
  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>
        </th>
        <th>USER NAME</th>
        <th>EMAIL</th>
        <th>PHONE NUMBER</th>
        <th>PRODUCTS IN CART</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
            users&&users.map(e=>{
  return(
                <tr>
                <th>
                <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <p>{e.username}</p>
                  </div>
                </td>
                <td>
                  <p>{e.email}</p>
                </td>
                <td>
                    <p>{e.phone}</p>
                </td>
                <td>
                    <button className='btn' onClick={()=>Delete(e.id)}>Delete</button>
                </td>
                <td>
                    <button className='btn' onClick={()=>Block(e.id,e.status)}>{(e.status==true)?"Block":"UnBlock"}</button>
                </td>
              </tr>
  )

            })
        }
     
</tbody>
    
  </table>
</div>
    </div>
  )
}

export default Table
