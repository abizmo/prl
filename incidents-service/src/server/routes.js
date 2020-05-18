import { accidentForms, incidents } from "./controllers";

const setupRoutes = app => {
  app.get("/accidentForms", accidentForms.getMany);

  app.get("/incidents", incidents.getMany);
};

export default setupRoutes;
