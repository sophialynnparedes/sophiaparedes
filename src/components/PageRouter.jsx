import { Route, Switch, Router } from "wouter";
import Home from "../pages/Home";
import Classes from "../pages/Classes";
import Tutorials from "../pages/Tutorials";

export default function PageRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/classes" component={Classes} />
        <Route path="/tutorials" component={Tutorials} />
      </Switch>
    </Router>
  );
}
