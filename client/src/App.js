import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Onebox from './pages/Onebox/Onebox';
import Gapi from './components/gapi';
// import Sidebar from './pages/Onebox/Sidebar';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/onebox" element={<Gapi element={Onebox} />} />
    </Routes>
  );
};

export default App;
