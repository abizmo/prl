module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "professionalGroups",
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
      title: {
        allowNull: false,
        type: DataTypes.STRING
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
