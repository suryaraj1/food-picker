import React from 'react';
import './FoodCard.css';

const FlagCard = ({ foodIcon }) => {
    return (
        <div className='food-card-wrapper'>
            <p className='food'>{foodIcon}</p>
        </div>
    )
}

export default FlagCard;