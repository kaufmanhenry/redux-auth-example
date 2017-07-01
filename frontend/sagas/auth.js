import {
  takeLatest,
  call,
  put
} from 'redux-saga/effects';
import {
  hashHistory
} from 'react-router';

import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  TOKEN_NAME
} from '../constants/auth';

import {
  signup,
  login
} from '../api/auth';

function* signupFlow(action) {
  try {
    const {
      username,
      password
    } = action;
    const response = yield call(signup, username, password);
    yield put({
      type: SIGNUP_SUCCESS,
      response
    });
  } catch (e) {
    yield put({
      type: SIGNUP_ERROR,
      e
    });
  }
}

function updateToken(token) {
  if (token) {
    console.info('Saving a token...');
    localStorage.setItem(TOKEN_NAME, token);
  } else {
    console.info('Removing a token...');
    localStorage.removeItem(TOKEN_NAME);
  }
}

function* loginFlow(action) {
  try {
    const {
      email,
      password
    } = action;
    const response = yield call(login, email, password);
    yield put({
      type: LOGIN_SUCCESS,
      response
    });
    yield call(updateToken, response.data.token);
    hashHistory.push('/app');
  } catch (error) {
    yield put({
      type: LOGIN_FAILURE,
      error
    });
  }
}

function* logoutFlow() {
  try {
    const response = yield call(updateToken);
    yield put({
      type: LOGOUT_SUCCESS,
      response
    });
    hashHistory.push('/login');
  } catch (error) {
    yield put({
      type: LOGOUT_FAILURE,
      error
    });
  }
}

function* authWatcher() {
  yield takeLatest('SIGNUP_REQUEST', signupFlow);
  yield takeLatest('LOGIN_REQUEST', loginFlow);
  yield takeLatest('LOGOUT_REQUEST', logoutFlow);
}

export default authWatcher;
