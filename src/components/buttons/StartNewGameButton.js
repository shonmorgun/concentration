import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { getCards } from '../../api/DeckOfCardsAPI';
import './StartNewGameButton.css';

export default class StartNewGameButton extends Component {
    startNewGame = async () => {
        try {
            this.props.cards(await getCards());
        }
        catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <Button className="new-game-button" variant="contained" color="primary" onClick={this.startNewGame.bind(this)}>
                <span>New Game</span>
            </Button >
        );
    }
}
