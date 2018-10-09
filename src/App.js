import React, { Component } from 'react';
import TableOfCards from './components/table/TableOfCards';
import StartNewGameButton from './components/buttons/StartNewGameButton'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameStarted: false,
      cards: {},
      won: false
    }
  }

  startNewGame = cards => {
    this.setState({ gameStarted: true, cards: cards, won: false });
  }

  endTheGame() {
    this.setState({ gameStarted: false, cards: {}, won: true });
  }

  render() {
    let display;
    if (this.state.gameStarted) {
      display = <TableOfCards cards={this.state.cards} gameEnded={this.endTheGame.bind(this)} />
    }
    else if (this.state.won) {
      display = <div><h2>Congratulations, You Won!</h2><br /><StartNewGameButton cards={this.startNewGame.bind(this)} /></div>
    }
    else {
      display = <div><h2>Concentration</h2><br /><StartNewGameButton cards={this.startNewGame.bind(this)} /></div>
    }

    return (
      <div className="App">
        {display}
      </div>
    );
  }
}

