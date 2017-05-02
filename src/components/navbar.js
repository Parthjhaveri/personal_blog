import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';

class Navi extends Component {
  render() {
    return (
      <div className="navi">
        <center>
        	<ul className="navlist">
        		<li className="navlistitem">Website</li>
        		<li className="navlistitem">Archives</li>
        		<li className="navlistitem">About</li>
        	</ul>
        </center>
      </div>
    );
  }
}

export default Navi;
