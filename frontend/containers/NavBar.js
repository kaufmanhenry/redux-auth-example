import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Button, Space, Container } from 'rebass';
import { Flex } from 'reflexbox';

const NavBar = (props) => {
  const { user, logout } = props;
  return (
    <Container>
      <Flex py={2}>
        <Heading level={3}>Redux Auth Example</Heading>
        <Space auto x={1} />
        {!user && <Button href="#/login" backgroundColor="primary" color="white" rounded>
          Login
        </Button>}
        {user && <Button backgroundColor="primary" color="white" rounded onClick={logout()}>
          Logout
        </Button>}
      </Flex>
    </Container>
  );
};

NavBar.propTypes = {
  user: PropTypes.string,
  logout: PropTypes.func
};

NavBar.defaultProps = {
  user: null,
  logout: () => {}
};

export default NavBar;
