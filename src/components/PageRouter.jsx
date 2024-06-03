import { Route, Switch, Router } from "wouter";
import Home from "../pages/Home";
import About from "../pages/About";

export default function PageRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}
