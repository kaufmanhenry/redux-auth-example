import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import styled from 'styled-components';

import configureStore from './redux/configureStore';
import routes from './routes';

const store = configureStore();

const history = syncHistoryWithStore(createHistory(), store);

const Root = styled.div`
  font: 87.5%/1.6rem -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Helvetica, sans-serif;
  margin: 0;
  color: #111;
  background-color: #fff;
`;

render(
  <Root>
    <Provider store={store}>
      <Router history={history}>
        {routes(store)}
      </Router>
    </Provider>
  </Root>,
  document.getElementById('root')
);
