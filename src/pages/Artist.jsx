import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AllArtist from '../components/artist/AllArtist';

const Artist = () => {
    const [artist, setArtist] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:9098/api/artist').then(res=>setArtist(res.data));
    }, [artist])
    return (
        <div className='user'>
            <div className="user__header">
                <span>no.</span>
                <span>ID</span>
                <span>Avatar</span>
                <span>Artist name</span>
                <span>Followers</span>
                <span>Eth Wallet</span>
                <span>Action</span>
            </div>
            {artist.map((item, index) => (
                <AllArtist item={item} index={index} />
            ))}
        </div>
    )
}

export default Artist
