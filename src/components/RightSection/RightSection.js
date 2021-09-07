import React from 'react';
import FoodCard from '../FoodCard/FoodCard';
import './RightSection.css';

const foodEmoticons = [
    "🍪", "🍎", "🍖", "🍨", "🍯", "🍜", "🌭", "🍕", "🌮", "🍟", "🍱", "🥗"
]

class RightSection extends React.Component {
    render() {
        return (
            <div className='right-section-wrapper'>
                <div className='input-wrapper'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input placeholder="Enter a food emoji"/>
                </div>
                <div className='food-card-grid'>
                    <div className='selection-text-wrapper'>
                        <p className='selection-text'>Pick a Food Emoji</p>
                    </div>
                    <div className='food-card-container'>
                        {foodEmoticons.map(emoji => <FoodCard foodIcon={emoji}/>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default RightSection;