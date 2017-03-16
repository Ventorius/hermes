import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h1 className="title">Welcome to Hermes</h1>
          <p className="description">Click button below to start benchmarking your reflexes</p>
        </div>
        <button className="start-button">START</button>
        <p className="hint">* Wait until screen turns green. <br/>When it does click as quickly as you can</p>
      </div>
    );
  }
}

export default App;
