module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "affectedWorkers",
    {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE
      },
      incidentId: {
        allowNull: false,
        references: {
          key: "_id",
          model: "incidents"
        },
        type: DataTypes.INTEGER.UNSIGNED
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      workerId: {
        allowNull: false,
        references: {
          key: "_id",
          model: "workers"
        },
        type: DataTypes.UUID
      }
    },
    {
      charset: "utf8"
    }
  );
};
