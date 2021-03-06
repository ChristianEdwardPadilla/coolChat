import gql from 'graphql-tag';

export const createMessage = gql`
  mutation($message: String!) {
    createMessage(message: $message) {
      mutation
      success
      error
      message {
        id
        username
        message
        created_at
      }
    }
  }
`;

export const createUser = gql`
  mutation($username: String!, $password: String!) {
    createUser(username: $username) {
      username
      password
    }
  }
`;

export const login = gql`
  mutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      username
      token
      success
      error
    }
  }
`;

export const signup = gql`
  mutation($username: String!, $password: String!) {
    signup(username: $username, password: $password) {
      username
      token
      error
      success
    }
  }
`;
