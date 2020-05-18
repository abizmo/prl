const createRegisters = require("../helpers/createRegisters");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const registers = createRegisters([
      "No se conoce",
      "Puncion",
      "Sutura",
      "Otra"
    ]);
    return queryInterface.bulkInsert("uses", registers);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("uses", null, {});
  }
};
