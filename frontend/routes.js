import React from 'react';
import { Route } from 'react-router';

import App from './containers/App';
import Authenticated from './containers/Authenticated';
import Login from './containers/Login';
import NotFound from './containers/NotFound';

import { TOKEN_NAME } from './constants/auth';

const checkAuth = (nextState, replace, callback) => {
  const token = localStorage.getItem(TOKEN_NAME);
  const nextLoc = nextState.location.pathname;

  if (!token && nextLoc !== '/login' && nextLoc !== '/signup') replace('/login');
  if (token && (nextLoc === '/login' || nextLoc === '/signup' || nextLoc === '/')) replace('/authenticated');
  return callback();
};

const routes = (
  <div>
    <Route path="/" onEnter={checkAuth} component={App}>
      <Route path="authenticated" component={Authenticated} />
    </Route>
    <Route path="/login" exact component={Login} />
    <Route path="*" component={NotFound} />
  </div>
);

export default routes;
