import React from "react";
import "./EmojiMeaning.css";

const isEmojiAbsent = (emojiMeaning) => {
    return (emojiMeaning === "We don't know this item!");
}

const EmojiMeaning = ({ emoji, emojiMeaning }) => {
    return (
        <div className={`emoji-meaning-wrapper ${isEmojiAbsent(emojiMeaning) && "failure"}`}>
            {isEmojiAbsent(emojiMeaning) ? (
                <p className="emoji-meaning failure">{emojiMeaning}</p>
            ) : (
                <>
                    <p className="emoji">{emoji}</p>
                    <p className="emoji-meaning">{emojiMeaning}</p>
                </>
            )}
        </div>
    );
};

export default EmojiMeaning;
