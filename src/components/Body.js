import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Body.css'
import poster from '../assets/images/Auto.png'
import title from '../assets/images/Title.png'

function Body() {
  const navigate = useNavigate();

  const navigateToAutoList = () => {
    navigate('/auto-list');
  }

  return (
    <div className='body'>
        <section className='title'>
            <img src={title} alt="Title" />
        </section>
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

        <section className='about-us'>
            <h1>About Us</h1>
            <p>Triyatri is a platform that connects you with auto rickshaw drivers in your area. We are a team of passionate individuals who are dedicated to providing you with the best possible service.
                <br />
                <br />
                Our mission is to make it easy for you to find an auto rickshaw driver in your area. We are a team of passionate individuals who are dedicated to providing you with the best possible service. 
                <br />
                <br />
                ✔ Easy to use
                <br />
                ✔ Zero Commission
                <br />
                ✔ Find the best auto rickshaw driver in your area
            </p>
        </section>
        
    </div>
  )
}

export default Body