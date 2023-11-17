import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AllUser from '../components/user/AllUser';

const User = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:9098/api/acc').then(res=>setUser(res.data));
    }, [user])
    return (
        <div className='user'>
            <div>Add users</div>
            <div className="user__header">
                <span>no.</span>
                <span>ID</span>
                <span>Avatar</span>
                <span>Username</span>
                <span>Email</span>
                <span>Eth Wallet</span>
                <span>Action</span>
            </div>
            {user.map((item, index) => (
                <AllUser item={item} index={index} />
            ))}
        </div>
    )
}

export default User
