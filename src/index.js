import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// THIS IS WHERE WE WILL RENDER EVERYTHING-----------------------------------------------------------------------------------
// ReactDOM.render(
//   <Router history={browserHistory}>
//     <Route path='/' component={App}>
//       <IndexRoute component={App} />
//       <Route path='/astronomyblog' component={TwitterBlog} />
//       <Route path='/twitterblog' component={AstronomyBlog} />
//     </Route>
//   </Router>,
//   document.getElementById('root')
// );
