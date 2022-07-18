import React from 'react'
import katie from '../images/katie-zaferes.png'
import star from '../images/star.png'

function Card(props) {
  return (
    <div className='card'>
        <div className='card-image'>
            <img src = {katie} alt = 'katie image' />
            <p>SOLD OUT</p>
        </div>
        <div className='card-details'>
            <div className='detail-head'>
                <img src = {star} alt = 'star image' />
                <h5>5.0</h5>
                <p>(6) &#x2022; USA</p>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span>From $136 </span>/ person</p>
        </div>
    </div>  
  )
}

export default Card