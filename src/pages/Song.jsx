import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AllSong from '../components/song/AllSong';

const Song = () => {
  const [song, setSong] = useState([]);
  useEffect(() => {
      axios.get('http://localhost:9098/api/song').then(res=>setSong(res.data));
  }, [song])

  return (
      <div className='song'>
          <div className="song__header">
              <span>no.</span>
              <span>ID</span>
              <span>Image</span>
              <span>Title</span>
              <span>Performers</span>
              <span>Album</span>
              <span>Release Date</span>
              <span>Genre</span>
              <span>Streams</span>
              <span>Action</span>
          </div>
          {song.map((item, index) => (
              <AllSong item={item} index={index} />
          ))}
      </div>
  )
}

export default Song
