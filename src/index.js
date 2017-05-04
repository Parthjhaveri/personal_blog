import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// THIS IS WHERE WE WILL RENDER EVERYTHING-----------------------------------------------------------------------------------
// ReactDOM.render(
//   <Router history={browserHistory}>
//     <Route path='/' component={App}>
//       <IndexRoute component={App} />
//       <Route path='/astronomyblog' component={AstroDiv} />
//     </Route>
//   </Router>,
//   document.getElementById('root')
// );
