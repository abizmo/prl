import { DataTypes, Model } from "sequelize";

import sequelize from "./connection";

export class UserSession extends Model {}
UserSession.init(
  {
    _id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    userId: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    expiresAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  },
  {
    modelName: "userSessions",
    paranoid: false,
    sequelize,
    updatedAt: false
  }
);
