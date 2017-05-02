import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';

class Splasher extends Component {
  render() {
    return (
      <div className="splasher">      
        <hr id="navhr"/>
        <center>
        	<p id="iblog">iBlog</p>
        	<p id="pj">PARTH JHAVERI</p>
        </center>


        <center>
        	<p id="blogofa">Front-End Developer | Designer | UI/UX Enthusiast</p>
        </center>
        <br />
        <center><span className="glyphicon glyphicon-menu-down" id="arrowdown"></span></center>
        <center><p id="latinphrase">(magnitudinem semper)</p></center>
      </div>
    );
  }
}

export default Splasher;
