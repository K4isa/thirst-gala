import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { checkHowManyTicketsSold } from './firebase/firebase';

import './style/App.css';

import DonationPage from './pages/Donation';
import TicketPage from './pages/Ticket';
import HomePage from './pages/HomePage';
import CountDown from './pages/CountDown';
// import NotFound from './pages/error/NotFound';

function App() {
  const [ticketsSold, setTicketsSold] = useState(0);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const tickets = await checkHowManyTicketsSold();
        setTicketsSold(tickets);
      } catch (error) {
        console.error('Error fetching tickets sold:', error);
      }
    };
  
    fetchTickets();
  }, []);

  return (
    <Router>
      <Routes>
        {/* <Route path='/doacoes' element={<HomePage />} /> */}
        <Route path='/bilhetes' element={<CountDown />} />
        {/* <Route path='/doacoes/doar' element={<DonationPage />} /> */}
        {ticketsSold > 200 ? (
          <Route path='/bilhetes/comprar' element={<CountDown unavailable />} />
        ) : (
          <Route path='/bilhetes/comprar' element={<TicketPage />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
