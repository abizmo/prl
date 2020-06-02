import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AddIncident from "./AddIncident";
import Incidents from "./Incidents";

const IncidentsApp = () => {
  return (
    <Router>
      <Switch>
        <Route path="/new">
          <AddIncident />
        </Route>
        <Route path="/">
          <Incidents />
        </Route>
      </Switch>
    </Router>
  );
};

export default IncidentsApp;
