const createRegisters = require("../helpers/createRegisters");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const registers = createRegisters([
      "Enfermería",
      "Fea",
      "Hostelería",
      "Mantenimiento"
    ]);
    return queryInterface.bulkInsert("professionalGroups", registers);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("professionalGroups", null, {});
  }
};
