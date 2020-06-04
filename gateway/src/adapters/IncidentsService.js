import got from "got";

const INCIDENTS_SERVICE_URI = "http://incidents-service:7100";

export default class IncidentsService {
  static async fetchAllAccidentForms() {
    const body = await got.get(`${INCIDENTS_SERVICE_URI}/accidentForms`).json();

    return body;
  }

  static async fetchAccidentForm({ accidentFormId }) {
    const body = await got
      .get(`${INCIDENTS_SERVICE_URI}/accidentForms/${accidentFormId}`)
      .json();

    return body;
  }

  static async fetchAllIncidents() {
    const body = await got.get(`${INCIDENTS_SERVICE_URI}/incidents`).json();

    return body;
  }

  static async fetchNotificationCategory({ notificationCategoryId }) {
    const body = await got
      .get(
        `${INCIDENTS_SERVICE_URI}/notificationCategories/${notificationCategoryId}`
      )
      .json();

    return body;
  }

  static async fetchNotificationClassification({
    notificationClassificationId
  }) {
    const body = await got
      .get(
        `${INCIDENTS_SERVICE_URI}/notificationClassifications/${notificationClassificationId}`
      )
      .json();

    return body;
  }

  static async fetchStatus({ statusId }) {
    const body = await got
      .get(`${INCIDENTS_SERVICE_URI}/statuses/${statusId}`)
      .json();

    return body;
  }
}
