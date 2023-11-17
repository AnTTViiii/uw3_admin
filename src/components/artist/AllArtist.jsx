import React from 'react'
import './all-artist.scss'

const AllArtist = ({ item, index }) => {
    return (
        <div className="user__item">
            <span>{index+1}</span>
            <span>{item.id}</span>
            <span><img src={item.avatar} alt='' /></span>
            <span>{item.username}</span>
            <span>{item.followercount}</span>
            <span>{item.ethwallet === null ? 'Not connected yet' : item.ethwallet}</span>
            <div className='user__item__action'>
                <div>More</div>
                <div>Delete</div>
            </div>
        </div>
    )
}

export default AllArtist
