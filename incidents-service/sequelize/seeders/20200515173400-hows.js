const createRegisters = require("../helpers/createRegisters");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const registers = createRegisters([
      "Al reencapuchar la aguja",
      "Durante el uso del material"
    ]);
    return queryInterface.bulkInsert("hows", registers);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("hows", null, {});
  }
};
