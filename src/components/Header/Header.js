import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-wrapper'>
            <p className='header-main'>Food Picker</p>
            <div className='header-sub-wrapper'>
                <p className='header-sub'>Check how much of a foodie you are by using this food emoticon identifier.</p>
            </div>
        </div>
    )
}

export default Header;