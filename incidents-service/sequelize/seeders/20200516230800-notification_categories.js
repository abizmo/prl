const createRegisters = require("../helpers/createRegisters");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const registers = createRegisters([
      "Accidente",
      "Incidente",
      "Situación de riesgo"
    ]);
    return queryInterface.bulkInsert("notificationCategories", registers);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("notificationCategories", null, {});
  }
};
