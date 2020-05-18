const createRegisters = require("../helpers/createRegisters");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const registers = createRegisters([
      "Conjuntiva",
      "Manos",
      "Mucosa nasal",
      "Piel intacta",
      "Piernas",
      "Otra (especificar)"
    ]);
    return queryInterface.bulkInsert("bodyZones", registers);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("bodyZones", null, {});
  }
};
