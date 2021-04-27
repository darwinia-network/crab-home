import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { asyncComponent } from "./components/AsyncComponent";
import { createBrowserHistory } from "history";
const AsyncHome = asyncComponent(import("./page/Home"));
const AsyncHome2 = asyncComponent(import("./page/Home2"));
const AsyncNotFound = asyncComponent(import("./page/NotFound"));

// const history = createBrowserHistory();

export default function router() {
  return (
    <Switch>
      <Route exact component={AsyncHome} path="/" />
      <Route exact component={AsyncHome2} path="/home" />
      <Route component={AsyncNotFound} />
    </Switch>
  );
}
