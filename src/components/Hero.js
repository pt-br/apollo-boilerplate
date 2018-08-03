import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

const GraphQLEndpointTextWrapper = Text.extend`
  padding-top: 20px;
  font-size: 14px;
`;

const GraphQLEndpointText = styled.span`
  color: #ff0880;
`;

class Hero extends Component {
  render() {
    const { graphqlEndpoint } = this.props;

    return (
      <Wrapper>
        <Logo />
        <Text>A simple Apollo boilerplate</Text>
        <GraphQLEndpointTextWrapper>
          Current GraphQL server endpoint:{' '}
          <GraphQLEndpointText>{graphqlEndpoint}</GraphQLEndpointText>
        </GraphQLEndpointTextWrapper>
      </Wrapper>
    );
  }
}

Hero.defaultProps = {
  graphqlEndpoint: 'None',
};

Hero.propTypes = {
  graphqlEndpoint: PropTypes.string,
};

export default Hero;
