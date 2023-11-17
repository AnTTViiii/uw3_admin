import React from 'react'
import './all-album.scss'

const AllAlbum = ({ item, index }) => {
  return (
    <div className="album__item">
        <span>{index+1}</span>
        <span>{item.id}</span>
        <span><img src={item.albumimg} alt='' /></span>
        <span>{item.albumname}</span>
        <span>{new Date(item.releaseDate).toUTCString()}</span>
        <span>{item.owner}</span>
        <span>{item.country}</span>
        <div className='album__item__action'>
            <div>Hide</div>
            <div>Delete</div>
        </div>
    </div>
  )
}

export default AllAlbum
