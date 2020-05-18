const createRegisters = require("../helpers/createRegisters");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const registers = createRegisters(["Masculino", "Femenino"]);
    return queryInterface.bulkInsert("sexes", registers);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("sexes", null, {});
  }
};
