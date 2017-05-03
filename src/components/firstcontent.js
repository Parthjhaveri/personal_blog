import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';

class FirstContent extends Component {
  render() {
    return (
      <div className="firstContent">
      	<div className="container">
      		
      		{
      			// FEATURED BLOGS
      		}

	      	<h1 id="featuredblogheading">Featured Blogs</h1>	
      		<center>

      			<a href="https://futurism.com/new-research-shows-that-time-travel-is-mathematically-possible/" target="_blank">
	      			<div className="featuredblog" id="widebox">
	      				<div className="descbox">
	      					<p>
	      						New Research shows that time-travel is mathematically possible
	      					</p>
	      				</div>
	      			</div>

	      		</a>

	      		<div className="featuredblog">
	      			
	      		</div>

	      		<div className="featuredblog">
	      			
	      		</div>
	      		
	      		<br/>

	      		<div className="featuredblog">
	      		</div>

	      		<div className="featuredblog">
	      		</div>

	      		<div className="featuredblog">
	      		</div>

	      		<div className="featuredblog">
	      		</div>
      		</center>

      	</div>
      </div>
    );
  }
}

export default FirstContent;
