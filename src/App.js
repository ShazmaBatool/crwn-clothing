import React from 'react';
import './App.css';
import { Route, Routes, Outlet } from 'react-router-dom';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import Signin from './components/signIn/Signin';

function App() {
  return (
      <div className="App">
        <Outlet />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
  );
}

export default App;
