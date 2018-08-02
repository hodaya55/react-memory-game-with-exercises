import React, { Component } from 'react';
import './App.css';
import Exercises from './Exercises';
import CardsBoard from './CardsBoard';
import _ from 'lodash';
import listImgSrc from './listImgSrc'
// import imgs from './imgs'

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

    clearInterval(this.countDown);
    //! check why is it not shuffle and flipp bacak all the cards after click on start new game
    let cards1 = this.state.cards;
    const cards = _.shuffle(_.map(cards1, obj => ({ ...obj, flipped: false })))
    // this.setState({ isStartGame: true, counterTimer: this.props.timer * 60, viewTimer: '', cards: cards });
    // , cards: this.createCardsArray() });
    this.setState({ isStartGame: true, counterTimer: this.props.timer * 60, viewTimer: '', cards: cards });
    // this.cards = this.createCardsArray();
    // console.log('cards');
    // console.log(this.cards);

    this.countDown = setInterval(() => this.down(), 1000);
  }
  down() {
    let count = this.state.counterTimer;
    if (this.state.isStartGame && count > 0) {
      count--;
      let m = Math.floor(count / 60);
      let s = count % 60;
      let showTimer = `${m < 10 ? ('0' + m) : m}:${s < 10 ? ('0' + s) : s}`;
      this.setState(() => { return { counterTimer: count, viewTimer: showTimer }; });
    }
    else {
      // count ==0
      clearInterval(this.countDown);
      this.setState({ isStartGame: false, counterTimer: this.props.timer * 60 });
      this.gameOver();
    }
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
        <Exercises />
        <button className="start-btn" onClick={this.startGame}>Start New Game</button>
        {this.state.isStartGame ?
          <div>
            <div className="timer" >
              {this.state.viewTimer}
            </div>
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
