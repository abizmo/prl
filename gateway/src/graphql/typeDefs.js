import { gql } from "apollo-server";

const typeDefs = gql`
  type accidentForm {
    _id: Int!
    title: String!
  }

  type Query {
    accidentForms: [accidentForm!]!
  }
`;

export default typeDefs;
