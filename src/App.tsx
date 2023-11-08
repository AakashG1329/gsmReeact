import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Electronics from './components/elecctronics/electronics';
import MobilesAccessories from './components/mobiles&accessories/mobilesAccessories';

function App() {
  return (
    <div className="App">
          {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/mobiles&accessories" element={<MobilesAccessories />} />

        </Routes>
    </div>
  );
}

export default App;
