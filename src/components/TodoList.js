import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import styled from 'styled-components';

import { GET_TODOS } from 'apollo/queries';
import { UPDATE_TODO } from 'apollo/mutations';

import { BeatLoader } from 'react-spinners';

const Wrapper = styled.div`
  display: block;
`;

class TodoList extends Component {
  render() {
    return (
      <Wrapper>
        <Query query={GET_TODOS}>
          {({ loading, error, data }) => {
            if (loading) return <BeatLoader color="#ea1c47" loading />;
            if (error) return <p>Error :(</p>;

            return data.todos.map(({ id, type }) => {
              let input;

              return (
                <Mutation mutation={UPDATE_TODO} key={id}>
                  {(updateTodo, { loading, error }) => (
                    <div>
                      <p>{type}</p>
                      <form
                        onSubmit={e => {
                          e.preventDefault();
                          updateTodo({ variables: { id, type: input.value } });

                          input.value = '';
                        }}
                      >
                        <input
                          ref={node => {
                            input = node;
                          }}
                        />
                        <button type="submit">Update Todo</button>
                      </form>
                      {loading && <BeatLoader color="#ea1c47" loading />}
                      {error && <p>Error :( Please try again</p>}
                    </div>
                  )}
                </Mutation>
              );
            });
          }}
        </Query>
      </Wrapper>
    );
  }
}

export default TodoList;
