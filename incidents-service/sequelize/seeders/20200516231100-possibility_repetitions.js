const createRegisters = require("../helpers/createRegisters");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const registers = createRegisters(["Alta", "Media", "Baja"]);
    return queryInterface.bulkInsert("possibilityRepetitions", registers);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("possibilityRepetitions", null, {});
  }
};
