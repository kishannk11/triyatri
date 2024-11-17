import React from 'react'
import './auto-list.css'
import driver from '../assets/images/Driver.jpg'    


function AutoList() {
  return (
    <div className='auto-list-container'>
        <div className='title'>
            Online Auto Drivers (2)
        </div>
        <div className='driver-card'>
            {/* <img src={driver} alt="Driver" /> */}
            <h5>Rajesh</h5>
            <p>Auto Number: KA-21-M-1234</p>
        </div>
    </div>
  )
}

export default AutoList