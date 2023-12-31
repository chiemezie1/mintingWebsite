import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom"
import { useState } from 'react';
import MainMint from "./components/MainMint";
import NavBar from "./components/NavBar";
import Terms from "./components/Terms";
import AboutUs from "./components/AboutUs";

function App() {
  const [accounts, setAccounts] = useState([]);
  return (
    <div className='overlay'>
      <div className="App">
        <NavBar accounts={accounts} setAccounts={setAccounts} />
        <Routes>
          <Route path="/" element={<MainMint accounts={accounts} setAccounts={setAccounts} />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Terms" element={<Terms />} />
        </Routes>
      </div>
      <div className='moving-background'></div>
    </div>
  );
}

export default App;