const createRegisters = require("../helpers/createRegisters");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const registers = createRegisters([
      "Administración",
      "Almacén",
      "Banco de sangre"
    ]);
    return queryInterface.bulkInsert("services", registers);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("services", null, {});
  }
};
