import React from 'react';
import PropTypes from 'prop-types';
import { Container, Heading, Input, Button, Card, Message } from 'rebass';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router';
import * as actions from '../redux/modules/auth';

const LoginContainer = (props) => {
  const { loginUser, auth, redirect } = props;

  const login = (e) => {
    e.preventDefault();
    loginUser({
      username: e.target.username.value,
      password: e.target.password.value
    }).then(() => redirect('/posts'));
  };

  return (
    <Container py={3}>
      <Card rounded width={256} p={2}>
        {auth.error && <Message
          rounded
          theme="error"
        >
          {auth.error.message}
        </Message>}
        <Heading level={2} size={3} pb={1}>Login</Heading>
        <form onSubmit={login}>
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
        {auth.token && <Link to="/posts">View Posts</Link>}
      </Card>
    </Container>
  );
};

LoginContainer.propTypes = {
  loginUser: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    error: PropTypes.shape()
  }).isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  ...actions,
  redirect: push
})(LoginContainer);
