export default function (state = { userIsFetching: false }, action) {
  const { data } = action;
  switch (action.type) {
    case 'USER_LOGIN_REQUEST':
      return {
        ...state,
        userIsLogginIn: true
      };
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        userIsLogginIn: false,
        token: data.token
      };
    case 'USER_LOGIN_FAILURE':
      return {
        ...state,
        userIsLogginIn: false,
        error: action.err
      };
    default:
      return state;
  }
}

export const fetchUser = user => ({
  type: 'USERS',
  url: `users/${user}`
});

export const registerUser = user => ({
  type: 'USER_REGISTER',
  url: 'register',
  options: {
    method: 'post',
    data: user
  }
});

export const loginUser = user => ({
  type: 'USER_LOGIN',
  url: 'login',
  options: {
    method: 'post',
    data: user
  }
});

export const isAuthenticated = (state) => {
  if (state.auth) return state.auth.token;
  return false;
};
