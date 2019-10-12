import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import CreateJoinScreen from "../src/components/CreateJoinScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/join">
          <CreateJoinScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
