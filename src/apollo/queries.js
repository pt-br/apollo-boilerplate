import gql from 'graphql-tag';

export const GET_TODOS = gql`
  {
    todos {
      id
      type
    }
  }
`;

const queries = {
  GET_TODOS,
};

export default queries;
