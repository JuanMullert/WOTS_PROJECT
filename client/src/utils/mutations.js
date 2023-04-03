import { gql } from '@apollo/client'

export const SIGNUP = gql`
mutation Signup($input: SignupInput!) {
    signup(input: $input) {
      user {
        username
        email
        password
      }
      token
    }
}`;

export const LOGIN = gql`
mutation Login($input: LoginInput!) {
    login(input: $input) {
      user {
        email
        password
      }
      token
    }
}`;

export const ADDFRIEND = gql`
mutation AddFriend($friendId: ID!) {
  addFriend(friendId: $friendId) {
    _id
  }
}`