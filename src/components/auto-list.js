import React from 'react'
import './auto-list.css'
import driver from '../assets/images/Driver.jpg'    

// Example data array
const drivers = [
  { id: 1, name: 'Rajesh', location: 'Mumbai, Maharashtra', autoNumber: 'MH 12 AB 3456', image: driver },
  { id: 2, name: 'Suresh', location: 'Pune, Maharashtra', autoNumber: 'MH 14 CD 7890', image: driver },
  // Add more drivers as needed
];

function AutoList() {
  return (
    <div className='body'>
        <div className='auto-list-container'>
            <h5>Online Auto Drivers ({drivers.length})</h5>
            <div className='driver-list'>
                {drivers.map((driver) => (
                    <div key={driver.id} className='driver-card'>
                        <img src={driver.image} alt="Driver" />
                        <h6>{driver.name}</h6>
                        <p>{driver.location}</p>
                        <p>{driver.autoNumber}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AutoList