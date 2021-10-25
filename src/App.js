import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CreatePollPage from "./pages/CreatePollPage";
import PollPage from "./pages/PollPage";
import FeedbackPage from "./pages/FeedbackPage";
import { getEnvironment } from "./common/requests/Environment";
import { io } from "socket.io-client";

require("dotenv").config();

export const Socket = io({ path: "/socket.io" });
export const Context = createContext({});

const App = () => {
  const [context, setContext] = useState({});

  useEffect(async () => {
    setContext({ environmentUrl: (await getEnvironment()).data });
  }, []);

  return (
    <Router>
      <Switch>
        <Context.Provider value={context}>
          <Route exact path="/">
            <CreatePollPage />
          </Route>
          <Route path="/poll/:pollId">
            <PollPage />
          </Route>
          <Route path="/feedback">
            <FeedbackPage />
          </Route>
        </Context.Provider>
      </Switch>
    </Router>
  );
};

export default App;
