import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './style/App.css';

import DonationPage from './pages/Donation';
import HomePage from './pages/HomePage';
import CountDown from './pages/CountDown';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/doacoes' element={<HomePage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/doacoes/doar' element={<DonationPage />} />
        <Route path='/bilhetes' element={<CountDown unavailable />} />
        <Route path='/bilhetes/comprar' element={<CountDown unavailable />} />
      </Routes>
    </Router>
  );
}

export default App;
