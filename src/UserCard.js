import React from 'react'

function UserCard({el}) {
  return (
    <div className='card'>
      <p>Name: {el.name}</p>
      <p>Username: {el.username}</p> 
      <p>Mail of user: {el.email}</p>
    </div>
  )
}

export default UserCard