import React from 'react'
import star from '../images/star.png'

function Card(props) {
  let badgeText;
  if(props.openSpots  === 0) badgeText = "SOLD OUT";
  else if(props.location === "Online") badgeText = "ONLINE";
  return (
    <div className='card'>
        <div className='card-image'>
            <img src = {require(`../images/${props.coverImg}`)} alt = 'katie image' />
            {badgeText && <p>{badgeText}</p>}
        </div>
        <div className='card-details'>
            <div className='detail-head'>
                <img src = {star} alt = 'star image' />
                <h5>{props.stats.rating}</h5>
                <p>{`(${props.stats.reviewCount})`} &#x2022; {props.location}</p>
            </div>
            <p>{props.title}</p>
            <p className='card-price'><span>From ${props.price} </span>/ person</p>
        </div>
    </div>  
  )
}

export default Card