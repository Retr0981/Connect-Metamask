import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wallet from './Pages/Connect';




function App() {
  return (
   <Router>
   <Routes>
   <Route path='/' element={<Wallet/>} />
   </Routes>
   </Router>
    );
}

export default App;