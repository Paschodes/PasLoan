import React from 'react'
import './DashNotify.css'

const DashNotify = () => {
  return (
    <div className='appdash-notify'>
        <div className='notify-head'>
            <h1>Notification</h1>
            <a href="/">View All</a>
        </div>

        <div className='notify-nav'>
            <a href="/" className='notifynav-all'>All</a>
            <a href="/" className='notifynav-un'>Unread</a>
        </div>
    </div>
  )
}

export default DashNotify;