import {
  accidentForms,
  incidents,
  notificationCategories,
  notificationClassifications,
  statuses
} from "./controllers";

const setupRoutes = app => {
  app.get("/accidentForms", accidentForms.getMany);
  app.get("/accidentForms/:accidentFormId", accidentForms.getOne);

  app.get("/incidents", incidents.getMany);
  app.get("/incidents/:incidentId", incidents.getOne);

  app.get("/notificationCategories", notificationCategories.getMany);
  app.get(
    "/notificationCategories/:notificationCategoryId",
    notificationCategories.getOne
  );

  app.get("/notificationClassifications", notificationClassifications.getMany);
  app.get(
    "/notificationClassifications/:notificationClassificationId",
    notificationClassifications.getOne
  );

  app.get("/statuses", statuses.getMany);
  app.get("/statuses/:statusId", statuses.getOne);
};

export default setupRoutes;
