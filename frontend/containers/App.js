import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar';

import { logoutRequest } from '../actions/auth';

class App extends Component {
  static propTypes = {
    logoutRequest: PropTypes.func.isRequired,
    auth: PropTypes.shape({
      user: PropTypes.object.isRequired
    }).isRequired
  }

  render() {
    return (
      <div>
        <Navbar logout={this.props.logoutRequest} user={this.props.auth.user} />
        {this.props.children}
      </div>
    );
  }
}

export default connect(({ user }) => ({ user }), logoutRequest)(App);
