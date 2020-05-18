const createRegisters = require("../helpers/createRegisters");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const registers = createRegisters(["Abierto", "En curso", "Finalizado"]);
    return queryInterface.bulkInsert("statuses", registers);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("statuses", null, {});
  }
};
