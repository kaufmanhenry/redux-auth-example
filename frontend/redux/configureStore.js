import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import apiMiddleware from './middleware/api';
import rootReducer from './modules/reducers';

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, apiMiddleware, logger)
  );
}
