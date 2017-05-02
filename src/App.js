import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navi from './components/navbar.js';
import Splasher from './components/splasher.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navi />
      <Splasher />
      </div>
    );
  }
}

export default App;
