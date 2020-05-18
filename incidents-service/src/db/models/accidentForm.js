import { DataTypes, Model } from "sequelize";

import sequelize from "#root/db/connection";

export class AccidentForm extends Model {}
AccidentForm.init(
  {
    _id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    }
  },
  {
    modelName: "accidentForms",
    sequelize
  }
);
