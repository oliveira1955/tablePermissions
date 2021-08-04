import React from "react";
import Header from "./layout/header/Header";
import Student from "./Components/student/Student";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AddStudent from "./Components/student/addstudent/AddStudent";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={props => <Student />} />
        </Switch>
        <Switch>
          <Route exact path="/add" render={props => <AddStudent />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
