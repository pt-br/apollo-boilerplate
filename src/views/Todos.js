import React, { Component } from 'react';
import styled from 'styled-components';

import TodoList from 'components/TodoList';
import AddTodo from 'components/AddTodo';

const Wrapper = styled.div`
  display: block;
`;

class Todos extends Component {
  render() {
    return (
      <Wrapper>
        <TodoList />
        <AddTodo />
      </Wrapper>
    );
  }
}

export default Todos;
