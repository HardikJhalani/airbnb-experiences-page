import React from 'react'
import katie from '../images/katie-zaferes.png'
import star from '../images/star.png'

function Card(props) {
  console.log(props);
  return (
    <div className='card'>
        <div className='card-image'>
            <img src = {props.img} alt = 'katie image' />
            <p>{props.status}</p>
        </div>
        <div className='card-details'>
            <div className='detail-head'>
                <img src = {star} alt = 'star image' />
                <h5>{props.rating}</h5>
                <p>{`(${props.reviewCount})`} &#x2022; {props.country}</p>
            </div>
            <p>{props.title}</p>
            <p><span>From ${props.price} </span>/ person</p>
        </div>
    </div>  
  )
}

export default Card