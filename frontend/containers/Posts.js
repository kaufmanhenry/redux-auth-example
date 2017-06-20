import React from 'react';
import { Container, Heading } from 'rebass';
import { Flex } from 'reflexbox';

const Posts = () => {
  return (
    <Container>
      <Flex py={3} align="center">
        <Heading level={3}>Posts page</Heading>
      </Flex>
    </Container>
  );
};

export default Posts;
