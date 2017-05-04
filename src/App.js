import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navi from './components/navbar.js';
import Splasher from './components/splasher.js';
import Buttons from './components/buttons.js'
import FirstContent from './components/firstcontent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navi />
        <Splasher />
        <Buttons />
        <FirstContent />
      </div>
    );
  }
}

export default App;
