import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import routes from './routes';
import rootReducer from './reducers';
import IndexSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware, logger))
);

const store = configureStore();

sagaMiddleware.run(IndexSagas);

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      {routes}
    </Router>
  </Provider>
), document.getElementById('root'));
