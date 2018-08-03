import React, { Component } from 'react';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterTimer: 1 + props.timer * 60, viewTimer: ''
    };
    clearInterval(this.countDown);
  }
  down() {
    let count = this.state.counterTimer;
    if (count > 0) {
      count--;
      let m = Math.floor(count / 60);
      let s = count % 60;
      let showTimer = `${m < 10 ? ('0' + m) : m}:${s < 10 ? ('0' + s) : s}`;
      this.setState({ counterTimer: count, viewTimer: showTimer });
    }
    else {
      // count ==0
      clearInterval(this.countDown);
      // pass throu func that timer is over or maybe pass all the time what is time ?
      // this.gameOver();
    }
  }

  componentDidMount() {
    this.countDown = setInterval(() => this.down(), 1000);
  }
  render() {
    return (
      <div className="timer">
        {this.state.viewTimer}
      </div>
    )
  }
}
