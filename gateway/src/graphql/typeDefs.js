import { gql } from "apollo-server";

const typeDefs = gql`
  scalar Date

  type Generic {
    _id: Int!
    title: String!
  }

  type Incident {
    _id: Int!
    accidentForm: Generic!
    affectedBodyPartId: Generic!
    affectedWorkerId: ID!
    authorId: ID!
    brand: String
    causativeMaterial: String
    causes: String
    correctiveMeassures: String
    createdAt: Date!
    deletedAt: Date
    description: String
    howId: Int
    incidentDate: Date!
    incidentTime: Date
    notificationCategory: Generic!
    objectId: Int
    othersAffected: String
    witness: String
    witnessPhone: String
    placeId: Int!
    possibilityRepetitionId: Int
    printAt: Date
    safetyMaterial: Boolean
    status: Generic!
    ownFunctions: Boolean!
    updatedAt: Date!
    useId: Int
    workingTimeId: Int!
  }

  type UserSession {
    _id: ID!
    createdAt: Date!
    expiresAt: Date!
    userId: String!
  }

  type Mutation {
    createUserSession(userId: String!, password: String!): UserSession!
    deleteUserSession(sessionId: ID!): Boolean!
  }

  type Query {
    incidents: [Incident!]!
    userSession(me: Boolean!): UserSession
  }
`;

export default typeDefs;
