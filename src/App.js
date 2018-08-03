import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import Hero from 'components/Hero';
import NoMatch from 'views/NoMatch';
import Todos from 'views/Todos';

const client = new ApolloClient({
  uri: 'https://8v9r9kpn7q.lp.gql.zone/graphql',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Hero />
        <Router>
          <Switch>
            <Route exact path="/" component={Todos} />
            <Route path="/todos" component={Todos} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
