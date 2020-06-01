import { DataTypes, Model } from "sequelize";

import sequelize from "#root/db/connection";

export class Incident extends Model {}
Incident.init(
  {
    _id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    accidentFormId: {
      allowNull: false,
      references: {
        key: "_id",
        model: "accidentForms",
      },
      type: DataTypes.INTEGER.UNSIGNED,
    },
    authorId: {
      allowNull: false,
      references: {
        key: "_id",
        model: "workers",
      },
      type: DataTypes.UUID,
    },
    brand: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    causativeMaterial: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    causes: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    correctiveMeassures: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    description: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    howId: {
      allowNull: true,
      references: {
        key: "_id",
        model: "hows",
      },
      type: DataTypes.INTEGER.UNSIGNED,
    },
    incidentDate: {
      allowNull: false,
      type: DataTypes.DATEONLY,
    },
    incidentTime: {
      allowNull: true,
      type: DataTypes.TIME,
    },
    notificationCategoryId: {
      allowNull: false,
      references: {
        key: "_id",
        model: "notificationCategories",
      },
      type: DataTypes.INTEGER.UNSIGNED,
    },
    notificationClassificationId: {
      allowNull: false,
      references: {
        key: "_id",
        model: "notificationClassifications",
      },
      type: DataTypes.INTEGER.UNSIGNED,
    },
    objectId: {
      allowNull: true,
      references: {
        key: "_id",
        model: "objects",
      },
      type: DataTypes.INTEGER.UNSIGNED,
    },
    witnessPhone: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    placeId: {
      allowNull: false,
      references: {
        key: "_id",
        model: "services",
      },
      type: DataTypes.INTEGER.UNSIGNED,
    },
    possibilityRepetitionId: {
      allowNull: true,
      references: {
        key: "_id",
        model: "possibilityRepetitions",
      },
      type: DataTypes.INTEGER.UNSIGNED,
    },
    printAt: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    safetyMaterial: {
      allowNull: true,
      type: DataTypes.BOOLEAN,
    },
    statusId: {
      allowNull: false,
      references: {
        key: "_id",
        model: "statuses",
      },
      type: DataTypes.INTEGER.UNSIGNED,
    },
    ownFunctions: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    useId: {
      allowNull: true,
      references: {
        key: "_id",
        model: "uses",
      },
      type: DataTypes.INTEGER.UNSIGNED,
    },
    workingTimeId: {
      allowNull: false,
      references: {
        key: "_id",
        model: "workingTimes",
      },
      type: DataTypes.INTEGER.UNSIGNED,
    },
  },
  {
    modelName: "incidents",
    sequelize,
  },
);
