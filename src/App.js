import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Header from "./layout/header/Header";
import PermissionTable from "./components/PermissionTable";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <PermissionTable props={props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
