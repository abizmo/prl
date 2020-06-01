import { DataTypes, Model } from "sequelize";

import sequelize from "#root/db/connection";

export class NotificationClassification extends Model {}
NotificationClassification.init(
  {
    _id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "notificationClassifications",
    sequelize,
  },
);
