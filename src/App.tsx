import React from 'react';
import './App.css';
import LandingPage from '../src/components/landingPage/landingPage'
import Header from '../src/components/header/header'

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;
