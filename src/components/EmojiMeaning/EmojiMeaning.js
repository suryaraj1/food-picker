import React from 'react';
import './EmojiMeaning.css';

const EmojiMeaning = ({ emoji, emojiMeaning }) => {
    return (
        <div className='emoji-meaning-wrapper'>
            <p className='emoji'>{emoji}</p>
            <p className='emoji-meaning'>{emojiMeaning}</p>
        </div>
    )
}

export default EmojiMeaning;