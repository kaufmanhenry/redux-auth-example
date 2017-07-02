import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar';

import { logoutRequest } from '../actions/auth';

const App = props => (
  <div>
    <Navbar logout={props.logoutRequest} user={props.auth.token} />
    {props.children}
  </div>
);

App.propTypes = {
  logoutRequest: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    token: PropTypes.string.isRequired
  }).isRequired,
  children: PropTypes.node.isRequired
};

export default connect(({ auth }) => ({ auth }), { logoutRequest })(App);
