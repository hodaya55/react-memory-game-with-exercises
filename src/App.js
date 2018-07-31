import React, { Component } from 'react';
import './App.css';
import CardsBoard from './CardsBoard';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { counterTimer: props.timer * 60, viewTimer: '', isStartGame: false };
  }
  startGame = () => {
    this.setState({ isStartGame: true });
    this.countDown = setInterval(() => this.down(), 1000);
    //   this.countDown = setInterval(() => this.down(), 1000);
    //   this.setState({ isStartGame: true });
  }
  down() {
    let count = this.state.counterTimer;
    if (this.state.isStartGame && count > 0) {
      count--;
      let m = Math.floor(count / 60);
      let s = count % 60;
      let showTimer = `${m < 10 ? ('0' + m) : m}:${s < 10 ? ('0' + s) : s}`;
      this.setState(() => {
        return { counterTimer: count, viewTimer: showTimer };
      });
    }
    else {
      // count ==0
      clearInterval(this.countDown);
      this.gameOver();
    }
  }
  gameOver = () => {
    console.log('game over');
    // todo: check if the memo game was complete and the solve 5 excesise

  }
  componentWillUnmount() {
    clearInterval(this.countDown);
  }
  render() {
    return (
      <div className="App">
        <button disabled={this.state.isStartGame} onClick={this.startGame}>New Game</button>
        {this.state.isStartGame && <div>{this.state.viewTimer}</div>}
        <CardsBoard />
      </div>
    );
  }
}

export default App;
