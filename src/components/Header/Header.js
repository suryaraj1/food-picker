import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-wrapper'>
            <p className='header-main'>Flag Picker</p>
            <div className='header-sub-wrapper'>
                <p className='header-sub'>Check your flag knowledge by using this flag emoticon identifier.</p>
            </div>
        </div>
    )
}

export default Header;