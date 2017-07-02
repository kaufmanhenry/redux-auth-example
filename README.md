# redux-auth-example 🔐

This is a basic example of authentication using React and Redux. A fake API is in place in order to take requests for logging in.

### Tech Used 🔧

- [React](http://facebook.github.io/react)
- [Redux](http://redux.js.org)
- [Redux Saga](https://redux-saga.js.org/)
- [React Router v3](https://reacttraining.com/react-router/)
- [Webpack](https://webpack.js.org/)
- [Rebass](http://jxnblk.com/rebass)
- [Express](http://expressjs.com)

### How does it work? 🤷‍♀️

When a user clicks the login button, the redux action `LOGIN_REQUEST` is fired, causing a redux saga to initiate using the `takeLatest` method.  Using the `loginFlow` generator function, an API call to `/api/login` is made using the `window.fetch` API. The **username is `test`** and the **password is `test`**. The backend responds with a fake token. If there is the token, the token exists, the `LOGIN_SUCCESS` action is called, and the redux state is updated, otherwise the `LOGIN_ERROR` action is called and no token is saved.

**🚧 Caution WIP 🚧**