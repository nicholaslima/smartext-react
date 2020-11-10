import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import GlobalStyles from './styles/global';
import  Provider  from '../src/context/index';

function App() {
  return (
    <div className="App">
        <Provider>
          <BrowserRouter>
              <Routes></Routes>
          </BrowserRouter>
        </Provider>
        <GlobalStyles />
    </div>
  );
}

export default App;
