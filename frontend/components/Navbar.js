import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Button, Space, Container } from 'rebass';
import { Flex } from 'reflexbox';

const NavBar = (props) => {
  const { token, logout } = props;
  return (
    <Container>
      <Flex py={2}>
        <Heading level={3}>Redux Auth Example</Heading>
        <Space auto x={1} />
        {!token && <Button href="#/login" backgroundColor="primary" color="white" rounded>
          Login
        </Button>}
        {token && <Button backgroundColor="primary" color="white" rounded onClick={logout()}>
          Logout
        </Button>}
      </Flex>
    </Container>
  );
};

NavBar.propTypes = {
  token: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired
};

export default NavBar;
