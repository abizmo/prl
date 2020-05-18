const createRegisters = require("../helpers/createRegisters");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const registers = createRegisters([
      "Entrada",
      "Primera",
      "Segunda",
      "Tercera",
      "Cuarta",
      "Salida"
    ]);
    return queryInterface.bulkInsert("workingTimes", registers);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("workingTimes", null, {});
  }
};
