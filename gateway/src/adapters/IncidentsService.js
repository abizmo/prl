import got from "got";

const INCIDENTS_SERVICE_URI = "http://incidents-service:7100";

export default class IncidentsService {
  static async fetchAllAccidentForms() {
    const body = await got.get(`${INCIDENTS_SERVICE_URI}/accidentForms`).json();

    return body;
  }
}
