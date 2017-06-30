import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from '../constants/auth';


export default function reducer(state, action) {
  const { user, errors } = action;
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loading: true,
        loaded: false
      };
    case LOGIN_SUCCESS:
      return {
        loading: false,
        loaded: true,
        user
      };
    case LOGIN_FAILURE:
      return {
        loading: false,
        loaded: false,
        errors
      };
    case SIGNUP_REQUEST:
      return {
        loading: true,
        loaded: false
      };
    case SIGNUP_SUCCESS:
      return {
        loading: false,
        loaded: true,
        user
      };
    case SIGNUP_FAILURE:
      return {
        loading: false,
        loaded: false,
        errors
      };
    case LOGOUT_REQUEST:
      return {
        loading: true,
        loaded: false
      };
    case LOGOUT_SUCCESS:
      return {
        loading: false,
        loaded: true
      };
    case LOGOUT_FAILURE:
      return {
        loading: false,
        loaded: false,
        errors
      };
    default:
      return state;
  }
}
