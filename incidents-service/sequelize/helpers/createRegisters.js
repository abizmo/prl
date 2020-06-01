const createRegisters = (arr) =>
  arr.map((title) => ({
    createdAt: new Date(),
    title,
    updatedAt: new Date(),
  }));

module.exports = createRegisters;
