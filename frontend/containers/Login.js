import React from 'react';
import PropTypes from 'prop-types';
import { Container, Heading, Input, Button, Card } from 'rebass';
import { connect } from 'react-redux';
import { loginRequest } from '../actions/auth';

class Login extends Container {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  login(e) {
    e.preventDefault();
    this.props.loginRequest({
      username: e.target.username.value,
      password: e.target.password.value
    });
  }

  render() {
    return (
      <Container py={3}>
        <Card rounded width={256} p={2}>
          <Heading level={2} size={3} pb={1}>Login</Heading>
          <form onSubmit={this.login}>
            <Input
              label="Username"
              name="username"
              rounded
              type="text"
            />
            <Input
              label="Password"
              name="password"
              rounded
              type="password"
            />
            <Button backgroundColor="primary" color="white" rounded>
              Login
            </Button>
          </form>
        </Card>
      </Container>
    );
  }
}

Login.propTypes = {
  loginRequest: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    error: PropTypes.shape()
  }).isRequired
};

export default connect(({ auth }) => ({ auth }), { loginRequest })(Login);
