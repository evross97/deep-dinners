import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import CreateJoinScreen from "../src/components/CreateJoinScreen";
import WheelView from "../src/components/WheelView"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/join">
          <CreateJoinScreen />
        </Route>
          <Route path="/spin">
              <WheelView />
          </Route>

      </Switch>
    </Router>
  );
}

export default App;
