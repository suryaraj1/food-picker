import React from "react";
import EmojiMeaning from "../EmojiMeaning/EmojiMeaning";
import FoodCard from "../FoodCard/FoodCard";
import "./RightSection.css";

const foodEmoticons = {
    "🍖": "Meat on Bone",
    "🍔": "Hamburger",
    "🥟": "Dumpling",
    "🍝": "Spaghetti",
    "🥦": "Brocolli",
    "🍟": "French Fries",
    "🍦": "Soft Ice Cream",
    "🍭": "Lollipop",
    "🍕": "Pizza",
    "🥝": "Kiwi Fruit",
    "🥓": "Bacon",
    "🌭": "Hot Dog",
};

class RightSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foodEmoji: "",
            emojiMeaning: "",
            clickCount: 0
        };
    }

    emojiHandler = (emoji) => {
        this.setState(
            {
                foodEmoji: emoji,
                emojiMeaning: foodEmoticons[emoji],
                inputExists: false,
                clickCount: this.state.clickCount + 1
            }
        );
    };

    emojiInputHandler = event => {
        const emoji = event.target.value;
        const meaning = foodEmoticons[emoji];
        if (meaning === undefined) {
            this.setState({
                inputExists: true,
                emojiMeaning: "We don't know this item!"
            })
        } else {
            this.setState({
                inputExists: false,
                foodEmoji: emoji,
                emojiMeaning: meaning
            })
        }
    }

    render() {
        const { foodEmoji, emojiMeaning, clickCount, inputExists } = this.state;
        return (
            <div className="right-section-wrapper">
                <div className="input-wrapper">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input placeholder="Enter a food emoji" onChange={this.emojiInputHandler}/>
                </div>
                <div className='emoji-meaning-container'>
                    {(clickCount > 0 || inputExists) && <EmojiMeaning emoji={foodEmoji} emojiMeaning={emojiMeaning}/>}
                </div>
                <div className="food-card-grid">
                    <div className="selection-text-wrapper">
                        <p className="selection-text">Pick a Food Emoji</p>
                    </div>
                    <div className="food-card-container">
                        {Object.keys(foodEmoticons).map((emoji) => {
                            return (
                                <FoodCard
                                    foodIcon={emoji}
                                    handler={this.emojiHandler}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default RightSection;
