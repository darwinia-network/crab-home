import { BrowserRouter } from "react-router-dom";
import BigNumber from "bignumber.js";

import Routes from "./Routes";
import "./theme/scss/libs.scss";
import "./theme/scss/theme.scss";
import "./theme/js/theme";
import "./App.css";

const fmt = {
  prefix: "",
  decimalSeparator: ".",
  groupSeparator: ",",
  groupSize: 3,
  secondaryGroupSize: 0,
  fractionGroupSeparator: " ",
  fractionGroupSize: 0,
  suffix: "",
};

BigNumber.config({ FORMAT: fmt });

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
