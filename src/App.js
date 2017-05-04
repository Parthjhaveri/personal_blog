import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navi from './components/navbar.js';
import Splasher from './components/splasher.js';
import Buttons from './components/buttons.js'
import FirstContent from './components/firstcontent.js';
import AstroDiv from './components/astronomy.js';
import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navi />
        <Splasher />
        <Buttons />
        <FirstContent />
        {this.props.children}
      </div>
    );
  }
}

export default App;
