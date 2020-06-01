import IncidentsService from "#root/adapters/IncidentsService";

const incidentsResolver = async () => {
  return await IncidentsService.fetchAllIncidents();
};

export default incidentsResolver;
