const createRegisters = require("../helpers/createRegisters");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const registers = createRegisters([
      "Líquido pleural",
      "Orina",
      "Otros (especificar)",
      "Saliva/esputo",
      "Sangre",
      "Vómito"
    ]);
    return queryInterface.bulkInsert("fluids", registers);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("fluids", null, {});
  }
};
