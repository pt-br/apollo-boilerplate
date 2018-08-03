import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import styled from 'styled-components';

import { GET_TODOS } from 'apollo/queries';
import { UPDATE_TODO } from 'apollo/mutations';

import { BeatLoader } from 'react-spinners';

const Wrapper = styled.div`
  display: block;
  margin-top: 80px;
  margin-bottom: 30px;
`;

const TodoWrapper = styled.div``;

const Form = styled.form``;

const Input = styled.input`
  border: 0;
  padding: 10px 0px 5px 0;
  font-size: 14px;
  background: transparent;
  border-bottom: 1px solid #d2116f;
  color: #dad4d4;
  outline: none;
`;

const Button = styled.button`
  width: 96px;
  -webkit-appearance: none;
  border: 0;
  padding: 10px;
  background: #d2116f;
  margin-left: 10px;
  color: #ffffff;
`;

const TodoText = styled.div`
  margin: 8px 0;
`;

const ErrorWrapper = styled.p``;

class TodoList extends Component {
  render() {
    return (
      <Wrapper>
        <Query query={GET_TODOS}>
          {({ loading, error, data }) => {
            if (loading) return <BeatLoader color="#ea1c47" loading />;
            if (error) return <ErrorWrapper>Error :(</ErrorWrapper>;

            return data.todos.map(({ id, type }) => (
              <Mutation mutation={UPDATE_TODO} key={id}>
                {(updateTodo, { loading, error }) => (
                  <TodoWrapper>
                    <TodoText>
                      {loading ? <BeatLoader color="#ea1c47" loading /> : type}
                    </TodoText>
                    <Form
                      onSubmit={e => {
                        e.preventDefault();
                        updateTodo({
                          variables: { id, type: this.todoInput.value },
                        });

                        this.todoInput.value = '';
                      }}
                    >
                      <Input
                        innerRef={Input => {
                          this.todoInput = Input;
                        }}
                      />
                      <Button type="submit">Update Todo</Button>
                    </Form>
                    {error && (
                      <ErrorWrapper>Error :( Please try again</ErrorWrapper>
                    )}
                  </TodoWrapper>
                )}
              </Mutation>
            ));
          }}
        </Query>
      </Wrapper>
    );
  }
}

export default TodoList;
