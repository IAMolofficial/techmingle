// Card.js
import React from 'react';
import './card.css';

const Card = ({ image,title, content, button }) => (
  <div className="card">
    {image && <img src={image} alt={title} className= "card-image" />}
    <p>{content}</p>
    <h2>{title}</h2>
    <div className="button-container">{button}</div>
  </div>
);

export default Card;
