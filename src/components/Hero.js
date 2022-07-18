import React from 'react'
import photoGrid from '../images/photo-grid.png'

function Hero() {
  return (
    <div className='hero'>
        <div className='photo-grid'>
          <img src={photoGrid} alt = 'photo-grid'/>
        </div>
        <div className='content'>
          <h1>Online Experiences</h1>
          <h5>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
          </h5>
        </div>
    </div>
  )
}

export default Hero