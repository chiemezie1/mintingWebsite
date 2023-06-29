import './App.css';
import React from 'react';
import { useState } from 'react';
import MainMint from "./components/MainMint";
import NavBar from "./components/NavBar";

function App() {
  const [accounts, setAcounts] = useState([]);
  return (
    <div className="App">
      <NavBar accounts={accounts} setAcounts={setAcounts} />
      <MainMint accounts={accounts} setAcounts={setAcounts} />
    </div>
  );
}

export default App;
