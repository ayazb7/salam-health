// App.js
import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<Header />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
