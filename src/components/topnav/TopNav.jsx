import React from 'react'
import './tovnav.scss'
import UserInfo from '../user-info/UserInfo'
import { data } from '../../constants'

const TopNav = () => {
  const openSideBar = () => {
    document.body.classList.add('sidebar-open')
  }
  return (
    <div className='topnav'>
      <UserInfo user={data.user} />
      <div className="sidebar-toggle" onClick={openSideBar}>
        <i className="bx bx-menu-alt-right"></i>
      </div>
    </div>
  )
}

export default TopNav
