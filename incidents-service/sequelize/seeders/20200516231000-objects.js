const createRegisters = require("../helpers/createRegisters");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const registers = createRegisters(["Aguja", "Material de cristal"]);
    return queryInterface.bulkInsert("objects", registers);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("objects", null, {});
  }
};
