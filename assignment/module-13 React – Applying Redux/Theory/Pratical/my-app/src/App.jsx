import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Profiles from './Profiles';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/profiles">Profiles</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profiles" element={<Profiles />} />
      </Routes>
    </div>
  );
};

export default App;
