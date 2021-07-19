import React from 'react';
//Styles
import { GlobalStyle } from './GlobalStyle';
//Components
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
