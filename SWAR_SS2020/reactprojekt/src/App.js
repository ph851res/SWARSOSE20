import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import RegistrationForm from "./components/Registration/RegistrationForm";
import CreateForm from "./components/Admin/CreateNewsletter/CreateForm"
import Dashboard from "./components/Admin/Dashboard"
import Header from "./components/Header/Header";
import Landingpage from "./components/Startseite/Landingpage";
import NewsletterDashboard from "./components/Newsletter/NewsletterDashboard";

function App() {
    const [articles, setArticle] = useState([{title: 'Unidentified flying object', subtitle: 'Terminology', content: 'The term "UFO" (or "UFOB") was coined in 1953 by the United States Air Force (USAF) to serve as a catch-all for all such reports. In its initial definition, the USAF stated that a "UFOB" was "any airborne object which by performance, aerodynamic characteristics, or unusual features, does not conform to any presently known aircraft or missile type, or which cannot be positively identified as a familiar object". Accordingly, the term was initially restricted to that fraction of cases which remained unidentified after investigation, as the USAF was interested in potential national security reasons and "technical aspects" (see Air Force Regulation 200-2).'}]);
    const addArticle = (title, subtitle, content) => {
        setArticle([...articles, {title, subtitle, content}]);
    };

    useEffect(() => {
        localStorage.setItem('articles', JSON.stringify(articles))
    }, [articles])

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
              <Route exact path="/admin/dashboard">
                  <Dashboard/>
              </Route>
              <Route path="/dashboard/newsletter/erstellen">
                  <CreateForm addArticle={addArticle}/>
              </Route>
              <Route path="/newsletterdashboard">
                  <NewsletterDashboard articles={articles}/>
              </Route>
          </Switch>
          </body>
      </Router>
  );
}

export default App;
