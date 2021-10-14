import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CreatePollPage from "./pages/CreatePollPage";
import PollPage from "./pages/PollPage";
import FeedbackPage from "./pages/FeedbackPage";
import { getEnvironment } from "./common/requests/Environment";

require("dotenv").config();

export const EnvironmentContext = createContext(
  "https://what2douts.azurewebsites.net"
);

const App = () => {
  const [environment, setEnvironment] = useState("production");

  useEffect(async () => {
    setEnvironment((await getEnvironment()).data);
  }, []);

  return (
    <Router>
      <Switch>
        <EnvironmentContext.Provider value={environment}>
          <Route exact path="/">
            <CreatePollPage />
          </Route>
          <Route path="/poll/:pollId">
            <PollPage />
          </Route>
          <Route path="/feedback">
            <FeedbackPage />
          </Route>
        </EnvironmentContext.Provider>
      </Switch>
    </Router>
  );
};

export default App;
