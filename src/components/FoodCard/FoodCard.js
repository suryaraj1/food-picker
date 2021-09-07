import React from 'react';
import './FoodCard.css';

class FoodCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedEmoji: ""
        }
    }

    onClickHandler = () => {
        const { foodIcon } = this.props;
        this.setState({
            selectedEmoji: foodIcon
        }, () => {
            const { handler } = this.props;
            const { selectedEmoji } = this.state;
            handler(selectedEmoji);
        })
    }


    render() {
        const { foodIcon } = this.props;
        return (
            <div className='food-card-wrapper' onClick={this.onClickHandler}>
                <p className='food'>{foodIcon}</p>
            </div>
        )
    }
}

export default FoodCard;