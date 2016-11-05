import React from 'react';
import {
  Router,
  Route,
  browserHistory,
  IndexRoute
} from 'react-router';

import App from './containers/app';
import Home from './containers/home';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
)

export default routes;
