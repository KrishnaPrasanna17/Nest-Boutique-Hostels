import React from 'react'
import './Card.css'

function Card({ src, title, description, user,location, price, rating }) {
    return (
        <div className="card">
            <img src={src} alt="" />

            <div className="card__info">
                <h2>{title}</h2>
                <div className="card__details">
                <h3>{user}</h3>
                <h2>{location}</h2>
                </div>
                <h4>{description}</h4>
                <div className="card__details">
                <h3>{price}</h3>
                <h3>{rating}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card