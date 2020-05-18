module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "workers",
    {
      _id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
      },
      birthdate: {
        allowNull: false,
        type: DataTypes.DATE
      },
      contractId: {
        allowNull: false,
        references: {
          key: "_id",
          model: "contracts"
        },
        type: DataTypes.INTEGER.UNSIGNED
      },
      dutyShift: {
        allowNull: false,
        type: DataTypes.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      phone: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
      },
      phone2: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
      },
      professionalCategoryId: {
        allowNull: false,
        references: {
          key: "_id",
          model: "professionalCategories"
        },
        type: DataTypes.INTEGER.UNSIGNED
      },
      professionalGroupId: {
        allowNull: false,
        references: {
          key: "_id",
          model: "professionalGroups"
        },
        type: DataTypes.INTEGER.UNSIGNED
      },
      serviceId: {
        allowNull: false,
        references: {
          key: "_id",
          model: "services"
        },
        type: DataTypes.INTEGER.UNSIGNED
      },
      sexId: {
        allowNull: false,
        references: {
          key: "_id",
          model: "sexes"
        },
        type: DataTypes.INTEGER.UNSIGNED
      },
      startAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      headquarterId: {
        allowNull: false,
        references: {
          key: "_id",
          model: "headquarters"
        },
        type: DataTypes.INTEGER.UNSIGNED
      },
      workplaceId: {
        allowNull: false,
        references: {
          key: "_id",
          model: "services"
        },
        type: DataTypes.INTEGER.UNSIGNED
      },
      workshiftId: {
        allowNull: false,
        references: {
          key: "_id",
          model: "workshifts"
        },
        type: DataTypes.INTEGER.UNSIGNED
      }
    },
    {
      charset: "utf8"
    }
  );
};
