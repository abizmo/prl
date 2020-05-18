const createRegisters = require("../helpers/createRegisters");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const registers = createRegisters(["Agresión física", "Agresión verbal"]);
    return queryInterface.bulkInsert("accidentForms", registers);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("accidentForms", null, {});
  }
};
