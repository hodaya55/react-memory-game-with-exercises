import React, { Component } from 'react';
import './App.css';
import Exercises from './Exercises';
import CardsBoard from './CardsBoard';
import _ from 'lodash';
import listImgSrc from './listImgSrc'

class App extends Component {
  //! check if it shuffle and flipp bacak all the cards after click on start new game

  constructor(props) {
    super(props);
    this.state = {
      counterTimer: props.timer * 60, viewTimer: '',
      isStartGame: false
      , cards: this.createCardsArray()
      // , cards: []
    };
    // this.cards = [];
  }
  startGame = () => {
    console.log("start new game");

    // clearInterval(this.countDown);
    //! check why is it not shuffle and flipp bacak all the cards after click on start new game
    let cards1 = this.state.cards;
    const cards = _.shuffle(_.map(cards1, obj => ({ ...obj, flipped: false })))
    this.setState({ isStartGame: true, counterTimer: this.props.timer * 60, viewTimer: '', cards: cards });

  }

  gameOver = () => {
    console.log('game over');
    // todo: check if the memo game was complete and the solve 5 excesise
    //! handle what if the user done the memo game and solve 5 targilim -begore the timer is over

  }
  // componentWillUnmount() {
  //   clearInterval(this.countDown);
  // }
  createCardsArray = () => {
    const tempArray = _.shuffle(listImgSrc);
    let cardsArray = [];
    for (let i = 0; i < this.props.cardsNum / 2; i++) {
      cardsArray.push({ src: tempArray[i], name: `card${i + 1}` });
      cardsArray.push({ src: tempArray[i], name: `card${i + 1}` });
    }
    //* random the cards array and flipp back all cards
    return _.shuffle(_.map(cardsArray, obj => ({ ...obj, flipped: false })));
  }
  render() {
    return (
      <div className="App">
        <button className="start-btn" onClick={this.startGame}>Start New Game</button>
        {this.state.isStartGame ?

          <div>
            <Timer timer={this.props.timer} />
            <Exercises isStartGame={this.state.isStartGame} />
            <CardsBoard cards={this.state.cards} />
          </div>
          :
          <h1 className="header-play-game" >Start Playing Now!</h1>
          // <CardsBoard cards={this.state.cards} />
        }
      </div>
    );
  }
}

export default App;
