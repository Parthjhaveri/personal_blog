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

	      		<a href="https://futurism.com/new-evidence-about-cold-spot-in-space-could-support-case-for-a-multiverse/" target="_blank">
		      		<div className="featuredblog" id="wideboxtwomultiverse">
		      			<div className="descbox">
	      					<p>
	      						We May Have Uncovered the First Ever Evidence of the Multiverse
	      					</p>
	      				</div>
		      		</div>
	      		</a>

      			<a href="https://futurism.com/astronomer-instead-of-alien-life-should-we-be-searching-for-signs-of-alien-tech/" target="_blank">
      			<div className="featuredblog" id="wideboxtwo">
      				<div className="descbox">
      					<p>
      						Astronomer: Instead of Alien Life, Should We Be Searching for Signs of Alien Tech?
      					</p>
      				</div>
      			</div>
	      		</a>

      			<a href="https://futurism.com/new-evidence-about-cold-spot-in-space-could-support-case-for-a-multiverse/" target="_blank">
	      		<div className="featuredblog" id="wideboxtwoaliens">
	      			<div className="descbox">
      					<p>
      						We May Have Uncovered the First Ever Evidence of the Multiverse
      					</p>
      				</div>
	      		</div>
	      		</a>

      		</center>

      	</div>
      </div>
    );
  }
}

export default FirstContent;
