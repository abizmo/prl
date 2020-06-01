const workers = [
  {
    _id: "aizqmong",
    birthdate: new Date(1981, 03, 14),
    contractId: 1,
    dutyShift: 1,
    createdAt: new Date(),
    firstName: "Abian",
    lastName: "Izquierdo",
    phone: 86987,
    professionalCategoryId: 1,
    professionalGroupId: 1,
    serviceId: 1,
    sexId: 1,
    startAt: new Date(2009, 11, 02),
    updatedAt: new Date(),
    headquarterId: 1,
    workplaceId: 1,
    workshiftId: 1,
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("workers", workers);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("workers", null, {});
  },
};
