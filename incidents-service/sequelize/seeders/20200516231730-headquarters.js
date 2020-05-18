const createRegisters = require("../helpers/createRegisters");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const registers = createRegisters(["Las Palmas", "Tenerife"]);
    return queryInterface.bulkInsert("headquarters", registers);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("headquarters", null, {});
  }
};
