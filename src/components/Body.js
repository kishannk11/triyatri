import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Body.css'
import poster from '../assets/images/Auto.png'
// import calling from '../assets/images/svg/calling.svg'
import phoneCall from '../assets/images/phone-call.png'


function Body() {
  const navigate = useNavigate();

  const navigateToAutoList = () => {
    navigate('/auto-list');
  }

  return (
    <div className='body'> 
        <section className='poster-container'>
            <div className='poster-image'>
                <img src={poster} alt="Poster" />
            </div>
            <div className='poster-content'>
                <h1>Find an auto? Try Triyatri</h1>
                <p>Contact your Autowala with just a click</p>
                <button className='find-now-button' onClick={navigateToAutoList}>Find Now →</button>
            </div>
        </section>

        <div className="section-container">

            <div className='illustration-content'>
              <h2>Whenever, Wherever</h2>
              <p>Contact your Autowala with just a click</p>
              <button className='find-now-button' onClick={navigateToAutoList}>Find Now →</button>
            </div>

            <div className='illustration-image'>
              <img src={phoneCall} alt="Illustration" style={{width: '50%', height: 'auto'}}/>
            </div>

        </div>
        
    </div>
  )
}

export default Body