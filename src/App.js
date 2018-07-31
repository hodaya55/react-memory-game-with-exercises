import React, { Component } from 'react';
import './App.css';
import CardsBoard from './CardsBoard';

class App extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <CardsBoard />
      </div>
    );
  }
}

export default App;
