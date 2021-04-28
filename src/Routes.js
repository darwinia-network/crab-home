import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { asyncComponent } from "./components/AsyncComponent";
import { createBrowserHistory } from "history";
const AsyncHome = asyncComponent(import("./page/Home"));
const AsyncEconomic = asyncComponent(import("./page/Economic"));
const AsyncPlo = asyncComponent(import("./page/Plo"));
const AsyncNotFound = asyncComponent(import("./page/NotFound"));

// const history = createBrowserHistory();

export default function router() {
  return (
    <Switch>
      <Route exact component={AsyncHome} path="/" />
      <Route exact component={AsyncEconomic} path="/economic" />
      <Route exact component={AsyncPlo} path="/plo" />
      <Route component={AsyncNotFound} />
    </Switch>
  );
}
