import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Landing from '../pages/LandingPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="landing" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
