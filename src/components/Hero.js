import React from 'react';
import styled from 'styled-components';

import ApolloLogo from 'images/apolloLogo.png';

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const Logo = styled.div`
  display: block;
  width: 150px;
  height: 150px;
  position: relative;
  margin: auto;
  margin-top: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${ApolloLogo});
`;

const Text = styled.div`
  padding-top: 10px;
  font-size: 20px;
  font-family: monospace;
`;

const Hero = () => (
  <Wrapper>
    <Logo />
    <Text>A simple Apollo boilerplate</Text>
  </Wrapper>
);

export default Hero;
