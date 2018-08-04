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
      this.props.checkTimerOver();
    }
  }
  componentWillReceiveProps(newProps) {
    clearInterval(this.countDown);
    this.setState({
      counterTimer: 1 + newProps.timer * 60, viewTimer: '', isWin: false
    });

    this.countDown = setInterval(() => this.down(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.countDown);
  }
  componentDidMount() {
    this.countDown = setInterval(() => this.down(), 1000);
  }
  render() {
    return (
      this.state.counterTimer == 0 ?
        <div className="timer-over">
          sorry, you loose! ¯\_(ツ)_/¯
      </div>
        :
        <div className="timer">
          {!this.props.isWin ?
            this.state.viewTimer : "00:00"}
        </div>

    )
  }
}
