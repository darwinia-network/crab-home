import { BrowserRouter } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Routes from './Routes'
import './theme/scss/libs.scss'
import './theme/scss/theme.scss'
import './theme/js/theme'

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
