import React, { Component } from 'react';
import './App.css';
import Exercises from './Exercises';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Exercises />
      </div>
    );
  }
}

export default App;
