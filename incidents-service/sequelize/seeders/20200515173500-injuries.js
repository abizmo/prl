const createRegisters = require("../helpers/createRegisters");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const registers = createRegisters([
      "Corte",
      "Otros (especificar)",
      "Pinchazo",
      "Rasguño",
      "Salpicadura"
    ]);
    return queryInterface.bulkInsert("injuries", registers);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("injuries", null, {});
  }
};
