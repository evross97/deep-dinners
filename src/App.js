import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import CreateJoinScreen from "../src/components/CreateJoinScreen";
import WheelView from "../src/components/WheelView";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/join">
          <CreateJoinScreen style={"blue-background"} />
        </Route>
        <Route path="/spin">
          <h1>Deep Dinners</h1>
          <br />
          <WheelView />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
