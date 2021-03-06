module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "pollutingFluids",
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
      fluidId: {
        allowNull: false,
        references: {
          key: "_id",
          model: "fluids"
        },
        type: DataTypes.INTEGER.UNSIGNED
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
      }
    },
    {
      charset: "utf8"
    }
  );
};
