import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import RegistrationForm from "./components/Registration/RegistrationForm";
import CreateForm from "./components/Admin/CreateNewsletter/CreateForm"
import Dashboard from "./components/Admin/Dashboard"
import Header from "./components/Header/Header";
import Landingpage from "./components/Startseite/Landingpage";

function App() {
  return (
      <Router>
          <body>
          <div>
              <Header/>
          </div>
          <Switch>
              <Route path="/registration">
                  <RegistrationForm/>
              </Route>
              <Route exact path="/">
                  <Landingpage/>
              </Route>
              <Route exact path="/dashboard">
                  <Dashboard/>
              </Route>
              <Route path="/dashboard/newsletter/erstellen">
                  <CreateForm/>
              </Route>
          </Switch>
          </body>
      </Router>
  );
}

export default App;
