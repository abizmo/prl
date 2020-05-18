import IncidentsService from "#root/adapters/IncidentsService";

const accidentFormsResolver = async () => {
  return await IncidentsService.fetchAllAccidentForms();
};

export default accidentFormsResolver;
