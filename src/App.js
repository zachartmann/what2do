import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import CreatePollPage from "./pages/CreatePollPage";
import PollPage from "./pages/PollPage";

require("dotenv").config();

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CreatePollPage />
        </Route>
        {/* Not sure how this will work with the API atm */}
        <Route path="/:pollId">
          <PollPage />
        </Route>
      </Switch>
    </Router>
  )
};

export default App;
