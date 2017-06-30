import { LOGIN_REQUEST, SIGNUP_REQUEST, LOGOUT_REQUEST } from '../constants/auth';

export function loginRequest({ username, password }) {
  return {
    type: LOGIN_REQUEST,
    username,
    password
  };
}

export function signupRequest({ username, password }) {
  return {
    type: SIGNUP_REQUEST,
    username,
    password
  };
}

export function logoutRequest() {
  return {
    type: LOGOUT_REQUEST
  };
}
