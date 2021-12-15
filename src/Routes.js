import React from "react";
import { Route, Switch } from "react-router-dom";
import { asyncComponent } from "./components/AsyncComponent";
const AsyncHome = asyncComponent(import("./page/Home"));
const AsyncEconomic = asyncComponent(import("./page/Economic"));
// const AsyncPlo = asyncComponent(import("./page/Plo"));
const AsyncPloContribute = asyncComponent(import("./page/PloContribute/PhaseTwo"));
const AsyncNotFound = asyncComponent(import("./page/NotFound"));

export default function router() {
  return (
    <Switch>
      <Route exact component={AsyncHome} path="/" />
      <Route exact component={AsyncEconomic} path="/economic" />
       {/*<Route exact component={AsyncPlo} path="/plo" />*/}
      <Route exact component={AsyncPloContribute} path="/plo-contribute" />
      <Route component={AsyncNotFound} />
    </Switch>
  );
}
