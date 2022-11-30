import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'

function UserList() {
    
    const [listOfUSer,setlistOfUSer]= useState([""])

    useEffect(()=>{
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>setlistOfUSer(res.data))
    .catch((err)=> console.log(err))
    }, [])
   
  return (
    <div>
        <h1>List of users:</h1>
      {listOfUSer.map ((el,i) => (<UserCard el={el}/>))}
    </div>
  )
}

export default UserList
