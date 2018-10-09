import React, { Component } from 'react';
import './Card.css';
import playingCardBack from '../../assets/playing-card-back.png'

export default class Card extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.flipCard(this.props.code);
    }

    render() {
        let isOpen = false;
        if (this.props.openCards[0] === this.props.code || this.props.openCards[1] === this.props.code) {
            isOpen = true;
        }

        return (
            <div className="card" id={this.props.code}>
                {
                    isOpen ? (<img src={this.props.image} className={this.props.removed ? "hiddenCard" : "playing-card-front"} alt={this.props.code} />)
                        :
                        (<img src={playingCardBack} className={this.props.removed ? "hiddenCard" : "playing-card-back"} onClick={this.handleClick} alt="playing-card-back" />)
                }
            </div>
        );
    }
}
