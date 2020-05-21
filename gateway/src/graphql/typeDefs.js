import { gql } from "apollo-server";

const typeDefs = gql`
  scalar Date

  type accidentForm {
    _id: Int!
    title: String!
  }

  type UserSession {
    _id: ID!
    createdAt: Date!
    expiresAt: Date!
    userId: String!
  }

  type Mutation {
    createUserSession(userId: String!, password: String!): UserSession!
  }

  type Query {
    accidentForms: [accidentForm!]!
    userSession(me: Boolean!): UserSession
  }
`;

export default typeDefs;
