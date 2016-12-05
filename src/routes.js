import React from 'react';
import {
  Router,
  Route,
  browserHistory,
  IndexRoute
} from 'react-router';

import App from './components/app';
import Home from './components/home';
import Blog from './components/blog';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='blog' component={Blog} />
    </Route>
  </Router>
)

export default routes;
