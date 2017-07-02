import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from '../constants/auth';


const initialState = {
  loading: false,
  loaded: false,
  errors: [],
  user: {}
};


export default function reducer(state = initialState, action) {
  const { response, errors } = action;
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        token: response.token
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        errors
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        errors
      };
    default:
      return state;
  }
}
