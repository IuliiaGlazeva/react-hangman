import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        The game goes as follows. The computer selects a random word.
        The player guesses letters. Guess correct, and more of the word is shown.
        Guess incorrectly six times, and the player loses.
        </p>
        <p> You missed: </p>
      </div>
    );
  }
}

export default App;
