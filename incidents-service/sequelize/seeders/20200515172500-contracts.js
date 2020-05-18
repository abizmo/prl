const createRegisters = require("../helpers/createRegisters");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const registers = createRegisters([
      "Eventual",
      "Interino",
      "Otro",
      "Plantilla",
      "Residente"
    ]);
    return queryInterface.bulkInsert("contracts", registers);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("contracts", null, {});
  }
};
