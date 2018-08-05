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
    };
    this.memo = false;
    this.math = false;
    this.isTimerOver = false;
  }
  startGame = () => {
    console.log("start new game");
    let cards1 = this.createCardsArray();
    this.setState({
      isStartGame: true, cards: cards1, isWin: false, isTimerOver: false
    });
  }

  checkWin = (game) => {
    console.log(game + ' -game solve');

    this[game] = true;
    console.log('this.memo');
    console.log(this.memo);
    console.log('this.math');
    console.log(this.math);

    // if (this.state.memo && this.state.math) {
    if (this.memo && this.math) {
      setTimeout(() => {
        this.setState({ isWin: true, isStartGame: false, isTimerOver: false });
      }, 500);
      this.memo = false;
      this.math = false;
      this.isTimerOver = false;

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
  checkTimerOver = () => {
    // this.isTimerOver = true;
    this.setState({ isTimerOver: true });
  }
  render() {
    return (
      <div className="App">
        <button className="start-btn" onClick={this.startGame}>Start New Game</button>
        {/* <p className="need-solve">You need to solve the memory game and solve {this.props.count} exercises in {this.props.timer} minuts. Go!</p> */}
        {/* {this.state.isStartGame ?
          <div>
            <Timer timer={this.props.timer} isWin={this.state.isWin} />
            <Exercises isStartGame={this.state.isStartGame} count={this.props.count} checkWin={this.checkWin} />
            <CardsBoard cards={this.state.cards} isStartGame={this.state.isStartGame} checkWin={this.checkWin} />
          </div>
          :
          (this.state.isWin) ? <div className="win-message">You win!!! ツ </div>
            :
            <div>
              <p className="need-solve">You need to solve the memory game and solve {this.props.count} exercises in {this.props.timer} minuts. Go!</p>
              <h1 className="header-play-game" >Start Playing Now!</h1>
            </div>
        } */}

        {
          // !this.state.isWin &&
          !this.state.isTimerOver &&
            this.state.isStartGame ?
            <div>
              <Timer timer={this.props.timer} isWin={this.state.isWin} checkTimerOver={this.checkTimerOver} />
              <Exercises isStartGame={this.state.isStartGame} count={this.props.count} checkWin={this.checkWin} />
              <CardsBoard cards={this.state.cards} isStartGame={this.state.isStartGame} checkWin={this.checkWin} />
            </div>
            :
            this.state.isWin && <div className="win-message">You win!!! ツ </div>
        }
        {
          (
            // this.state.isTimerOver ||
            !this.state.isStartGame) &&
          <div>
            <p className="need-solve">You need to solve the memory game and solve {this.props.count} exercises in {this.props.timer}{this.props.timer == "1" ? " minute" : " minutes"}. Go!</p>
            <h1 className="header-play-game" >Start Playing Now!</h1>
          </div>
        }
        {
          this.state.isTimerOver &&
          <div className="timer-over">
            sorry, you loose! ¯\_(ツ)_/¯
            <p className="need-solve">You need to solve the memory game and solve {this.props.count} exercises in {this.props.timer}{this.props.timer == "1" ? " minute" : " minutes"}. Go!</p>
          </div>
        }


      </div>
    );
  }
}

export default App;
