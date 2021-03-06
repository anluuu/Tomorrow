import gql from 'graphql-tag';

const EDIT_COMMUNITY_MUTATION = gql`
  mutation EDIT_COMMUNITY_MUTATION($name: String!, $description: String!, $picture: String!, $id: String!) {
    editCommunity(name: $name, description: $description, picture: $picture, id: $id) {
      id
    }
  }
`;

export default EDIT_COMMUNITY_MUTATION;
