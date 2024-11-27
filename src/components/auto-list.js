import React from 'react'
import './auto-list.css'
import driver from '../assets/images/Driver.jpg'    
import callIcon from '../assets/images/call-now.png'


function AutoList() {
  return (
    <div className='auto-list-container'>
        <div className='title'>
            Online Auto Drivers (2)
        </div>
        <div className="driver-card">
            <img src={driver} alt="Driver" className="driver-icon" />
            <div className="driver-info">
                <h3>Kishan Nayak</h3>
                <p>Blood Group O+</p>
                <p>Auto Number: KA-70-W-9347</p>
            </div>
            <button className="call-button">
                <img src={callIcon} alt="Call Now" />
                Call now
            </button>
        </div>
    </div>
  )
}

export default AutoList