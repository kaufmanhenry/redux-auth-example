import React from 'react';
import { Container, Heading } from 'rebass';
import { Flex } from 'reflexbox';

const NotFound = () => (
  <Container>
    <Flex py={3} align="center">
      <Heading level={3}>Not Found</Heading>
    </Flex>
  </Container>
);

export default NotFound;
