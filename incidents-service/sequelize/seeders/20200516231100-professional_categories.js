const createRegisters = require("../helpers/createRegisters");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const registers = createRegisters([
      "Admiministrativo",
      "Auxiliar Enfermeria",
      "Médico"
    ]);
    return queryInterface.bulkInsert("professionalCategories", registers);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("professionalCategories", null, {});
  }
};
