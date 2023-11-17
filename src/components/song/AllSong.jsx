import React from 'react'
import './all-song.scss'
const AllSong = ({ item, index }) => {

  return (
    <div className="song__item">
      <span>{index+1}</span>
      <span>{item.id}</span>
      <span><img src={item.img} alt='' /></span>
      <span>{item.songname}</span>
      <span className='song__item__performers'>{item.performer.map((a, i) => (
        <span>{a.username}</span>
      ))}</span>
      <span>{item.album.albumname}</span>
      <span>{new Date(item.album.releaseDate).getFullYear()}</span>
      <span>{item.genre}</span>
      <span>{item.streams}</span>
      <span className='song__item__action'>
          <div>Hide</div>
          <div>Delete</div>
      </span>
    </div>
  )
}

export default AllSong
