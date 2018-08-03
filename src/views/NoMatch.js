import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
`;

class NoMatch extends Component {
  render() {
    return (
      <Wrapper>
        Ooops! No route found for this path :/
      </Wrapper>
    );
  }
}

export default NoMatch;
