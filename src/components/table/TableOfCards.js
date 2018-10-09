import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import { areMatchingCardNumbers, removePairOfCardsFromDeck } from '../../utilities/CardUtilities';
import Card from '../card';

import './TableOfCards.css';

export default class TableOfCards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: this.props.cards,
            openCards: [],
            matchFound: 0,
        };

        this.flipCard = this.flipCard.bind(this);
        this.compareOpenCards = this.compareOpenCards.bind(this);
    }

    flipCard = cardCode => {
        let openCards = this.state.openCards;
        if (openCards.length < 2 && openCards[0] !== cardCode) {
            this.setState({ openCards: [...this.state.openCards, cardCode] }, () => {
                if (this.state.openCards.length === 2) {
                    this.compareOpenCards();
                }
            });
        }
    }

    compareOpenCards = () => {
        const firstCard = this.state.openCards[0];
        const secondCard = this.state.openCards[1];
        if (areMatchingCardNumbers(firstCard, secondCard)) {
            setTimeout(() => {
                const updatedDeckOfCards = removePairOfCardsFromDeck(this.state.cards, firstCard, secondCard);
                this.setState({ card: updatedDeckOfCards, matchFound: this.state.matchFound + 1 }, () => {
                    this.setState({ openCards: [] }, () => {
                        if (this.state.matchFound === 26) {
                            this.props.gameEnded();
                        }
                    });
                });
            }, 400);
        }
        else {
            setTimeout(() => {
                this.setState({ openCards: [] });
            }, 600);
        }
    }

    render() {
        return (
            <div className="table-of-cards">
                <h4>Pairs found: {this.state.matchFound}/26</h4><br />
                <GridList cellHeight={'auto'} className="grid-of-cards" cols={13}>
                    {this.state.cards.map(card => (
                        <GridListTile key={card.code} cols={1}>
                            <Card image={card.image} code={card.code} removed={card.removed} flipCard={this.flipCard} openCards={this.state.openCards} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }
}
