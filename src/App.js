import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './style/App.css';

import DonationPage from './pages/Donation';
import TicketPage from './pages/Ticket';
import HomePage from './pages/HomePage';
import CountDown from './pages/CountDown';
// import NotFound from './pages/error/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/doacoes' element={<HomePage />} />
        <Route path='/bilhetes' element={<CountDown />} />
        <Route path='/doacoes/doar' element={<DonationPage />} />
        <Route path='/bilhetes/comprar' element={<TicketPage />} />
        {/* 404 */}
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
