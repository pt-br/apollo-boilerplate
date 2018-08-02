import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

class Dogs extends Component {
  onDogSelected = () => {

  }

  render() {
    return (
      <Query query={GET_DOGS}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return (
            <select name="dog" onChange={this.onDogSelected}>
              {data.dogs.map(dog => (
                <option key={dog.id} value={dog.breed}>
                  {dog.breed}
                </option>
              ))}
            </select>
          );
        }}
      </Query>
    );
  }
}

export default Dogs;
