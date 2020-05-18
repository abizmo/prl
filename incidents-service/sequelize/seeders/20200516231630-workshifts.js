const createRegisters = require("../helpers/createRegisters");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const registers = createRegisters(["Mañana", "Tarde", "Noche"]);
    return queryInterface.bulkInsert("workshifts", registers);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("workshifts", null, {});
  }
};
