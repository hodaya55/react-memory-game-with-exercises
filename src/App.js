import React, { Component } from 'react';
import './App.css';
import Exercises from './Exercises';
import CardsBoard from './CardsBoard';
import Timer from './Timer'
import _ from 'lodash';
import listImgSrc from './listImgSrc'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStartGame: false,
      isWin: false
      // , memo: false, math: false
    };
    this.memo = false;
    this.math = false;
    this.isStartGame = false;
  }
  startGame = () => {
    console.log("start new game");
    let cards1 = this.createCardsArray();
    this.setState({
      isStartGame: true, cards: cards1, isWin: false
      // , memo: false, math: false
    });
  }

  checkWin = (game) => {
    console.log(game + ' -game solve');
    // todo: check if the memo game was complete and the solve 5 excesise
    //! handle what if the user done the memo game and solve 5 targilim -begore the timer is over

    this[game] = true;
    console.log('this.memo');
    console.log(this.memo);
    console.log('this.math');
    console.log(this.math);

    // if (this.state.memo && this.state.math) {
    if (this.memo && this.math) {
      setTimeout(() => {
        this.setState({ isWin: true, isStartGame: false });
      }, 500);
    }

  }
  createCardsArray = () => {
    const tempArray = _.shuffle(listImgSrc);
    let cardsArray = [];
    for (let i = 0; i < this.props.cardsNum / 2; i++) {
      cardsArray.push({ src: tempArray[i], name: `card${i + 1}`, flipped: false });
      cardsArray.push({ src: tempArray[i], name: `card${i + 1}`, flipped: false });
    }
    //* random the cards array
    return _.shuffle(cardsArray);
  }

  render() {
    return (
      <div className="App">
        <button className="start-btn" onClick={this.startGame}>Start New Game</button>
        <p className="need-solve">You need to solve the memory game and solve {this.props.count} exercises in {this.props.timer} minuts. Go!</p>
        {this.state.isStartGame ?
          <div>
            <Timer timer={this.props.timer} isWin={this.state.isWin} />
            <Exercises isStartGame={this.state.isStartGame} count={this.props.count} checkWin={this.checkWin} />
            <CardsBoard cards={this.state.cards} isStartGame={this.state.isStartGame} checkWin={this.checkWin} />
          </div>
          :
          (this.state.isWin) ? <div className="win-message">You win!!! </div>
            :
            <h1 className="header-play-game" >Start Playing Now!</h1>
        }
      </div>
    );
  }
}

export default App;
