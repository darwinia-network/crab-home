import React, { useReducer } from "react";
import "./assets/styles/app.scss";
import Navigation from "./components/Navigation";
import Routes from "./routes";
import { accountReducer, accountInitialState, AccountContext } from "./store";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [accountState, accountDispatch] = useReducer(accountReducer, accountInitialState);
  return (
    <>
      <AccountContext.Provider value={{ state: accountState, dispatch: accountDispatch }}>
        <Navigation />
        <ScrollToTop />
        <Routes />
      </AccountContext.Provider>
    </>
  );
}

export default App;
