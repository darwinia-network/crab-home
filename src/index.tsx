import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.scss";
import "./common";
import "./locale";
import App from "./App";
import { HashRouter } from "react-router-dom";

if (process.env.NODE_ENV === "production") {
  console.log = () => {};
  console.error = () => {};
  console.debug = () => {};
  console.dir = () => {};
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
