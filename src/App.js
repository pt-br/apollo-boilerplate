import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

const client = new ApolloClient({
  uri: 'https://8v9r9kpn7q.lp.gql.zone/graphql',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h2>Adding some 📝</h2>
        </div>
        <Todos />
        <AddTodo />
      </ApolloProvider>
    );
  }
}

export default App;
