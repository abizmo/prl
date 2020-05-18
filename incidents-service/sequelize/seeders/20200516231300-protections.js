const createRegisters = require("../helpers/createRegisters");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const registers = createRegisters([
      "Guante",
      "Gafas",
      "Pantalla",
      "Ninguna"
    ]);
    return queryInterface.bulkInsert("protections", registers);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("protections", null, {});
  }
};
