import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AllAlbum from '../components/album/AllAlbum';

const Album = () => {
    const [album, setAlbum] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:9098/api/latestAlbum').then(res=>setAlbum(res.data));
    }, [album])
    return (
        <div className='album'>
            <div className="album__header">
                <span>no.</span>
                <span>ID</span>
                <span>Image</span>
                <span>Album name</span>
                <span>Release Date</span>
                <span>Creator</span>
                <span>Country</span>
                <span>Action</span>
            </div>
            {album.map((item, index) => (
                <AllAlbum item={item} index={index} />
            ))}
        </div>
    )
}

export default Album
