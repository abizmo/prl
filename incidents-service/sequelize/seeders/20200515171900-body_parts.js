const createRegisters = require("../helpers/createRegisters");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const registers = createRegisters(["Abdomen", "Cabeza"]);
    return queryInterface.bulkInsert("bodyParts", registers);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("bodyParts", null, {});
  }
};
