import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import Hero from 'components/Hero';
import NoMatch from 'views/NoMatch';
import Todos from 'views/Todos';

const graphqlEndpoint = 'https://8v9r9kpn7q.lp.gql.zone/graphql';

const client = new ApolloClient({
  uri: graphqlEndpoint,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Hero graphqlEndpoint={graphqlEndpoint} />
        <Router>
          <Switch>
            <Route exact path="/" component={Todos} />
            <Route path="/apollo-boilerplate" component={Todos} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
