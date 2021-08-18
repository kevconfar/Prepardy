import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./Welcome";
import Game from "./Game";

function App() {
  return (
    <Router>
      {/* <Welcome /> */}
      {/* <Route exact path="/" component={Welcome} /> */}
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/game" component={Game} />
      </Switch>
    </Router>
  );
}

export default App;