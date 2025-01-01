import React from 'react'
import './Card.css';

export default function Card ({ videoSrc, title, description, link, image }) {
  return ( 
    <div className='card'>
      <div className='card_video'><iframe src={videoSrc} title={title}></iframe></div>
      <div> 
        <div className="card-title"> {title}</div> 
        <p className="card-description">{description}</p> 
        <a href={link} className="card-link" target="_blank" rel="noreferrer">Lue</a> 
        </div> 
        <img src={image} alt="foto" />
    </div> 
  )  
}
