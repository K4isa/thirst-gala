import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './style/App.css';

import Ticket from './pages/Ticket';
// import NotFound from './pages/error/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        {/* <Route path='/' element={<HomePage />} /> */}
        <Route path='/ticket' element={<Ticket />} />

        {/* 404 */}
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
