import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';

import { GET_TODOS } from 'apollo/queries';
import { ADD_TODO } from 'apollo/mutations';

const Wrapper = styled.div`
  display: block;
`;

const Form = styled.form``;

const Input = styled.input`
  border: 0;
  padding: 10px 0px 5px 0;
  font-size: 14px;
  background: transparent;
  border-bottom: 1px solid #4b9e1c;
  color: #dad4d4;
  outline: none;
`;

const Button = styled.button`
  width: 96px;
  -webkit-appearance: none;
  border: 0;
  padding: 10px;
  background: #4b9e1b;
  margin-left: 10px;
  color: #ffffff;
`;

class AddTodo extends Component {
  render() {
    return (
      <Mutation
        mutation={ADD_TODO}
        update={(cache, { data: { addTodo } }) => {
          const { todos } = cache.readQuery({ query: GET_TODOS });
          cache.writeQuery({
            query: GET_TODOS,
            data: { todos: todos.concat([addTodo]) },
          });
        }}
      >
        {addTodo => (
          <Wrapper>
            <Form
              onSubmit={e => {
                e.preventDefault();
                addTodo({ variables: { type: this.todoInput.value } });
                this.todoInput.value = '';
              }}
            >
              <Input
                autoFocus
                innerRef={Input => {
                  this.todoInput = Input;
                }}
              />
              <Button type="submit">Add Todo</Button>
            </Form>
          </Wrapper>
        )}
      </Mutation>
    );
  }
}

export default AddTodo;
