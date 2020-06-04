import IncidentsService from "#root/adapters/IncidentsService";

const Incident = {
  accidentForm: async incident => {
    return await IncidentsService.fetchAccidentForm({
      accidentFormId: incident.accidentFormId
    });
  },
  notificationCategory: async incident => {
    return await IncidentsService.fetchNotificationCategory({
      notificationCategoryId: incident.notificationCategoryId
    });
  },
  status: async incident => {
    return await IncidentsService.fetchStatus({
      statusId: incident.statusId
    });
  }
};

export default Incident;
