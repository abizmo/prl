const createRegisters = require("../helpers/createRegisters");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const registers = createRegisters([
      "Agresión física",
      "Agresión verbal / Gestual",
      "In Itinere",
      "Otro",
      "Pinchazo / Corte con riesgo biológico"
    ]);
    return queryInterface.bulkInsert("notificationClassifications", registers);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("notificationClassifications", null, {});
  }
};
