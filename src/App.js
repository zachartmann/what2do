import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CreatePollPage from "./pages/CreatePollPage";
import PollPage from "./pages/PollPage";
import FeedbackPage from "./pages/FeedbackPage";

require("dotenv").config();

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CreatePollPage />
        </Route>
        <Route path="/poll/:pollId">
          <PollPage />
        </Route>
        <Route path="/feedback">
          <FeedbackPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
