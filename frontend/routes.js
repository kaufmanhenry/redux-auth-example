import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import { isAuthenticated } from './redux/modules/auth';

import App from './containers/App';
import Posts from './containers/Posts';
import Login from './containers/Login';
import NotFound from './containers/NotFound';

import NavBar from './containers/NavBar';

const checkAuth = (state, replace, callback) => {
  if (!state.auth || !state.auth.user) return replace('/login');
  return callback();
};

export default function (store) {
  return (
    <div>
      <NavBar user={isAuthenticated(store.getState())} />
      <Router history={hashHistory}>
        <Route path="/" exact component={App} />
        <Route path="/login" exact component={Login} />
        <Route
          onEnter={(state, replace, callback) => checkAuth(store.getState(), replace, callback)}
          path="/posts"
          component={Posts}
        />
        <Route component={NotFound} />
      </Router>
    </div>
  );
}
