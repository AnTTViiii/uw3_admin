import React from 'react'
import './all-user.scss'

const AllUser = ({ item, index }) => {
  return (
    <div className="user__item">
        <span>{index+1}</span>
        <span>{item.id}</span>
        <span><img src={item.acc.avatar} alt='' /></span>
        <span>{item.acc.username}</span>
        <span>{item.email}</span>
        <span>{item.acc.ethwallet === null ? 'Not connected yet' : item.acc.ethwallet}</span>
        <div className='user__item__action'>
            <div>More</div>
            <div>Delete</div>
        </div>
    </div>
  )
}

export default AllUser
