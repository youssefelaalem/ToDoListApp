import { Holder } from './components/Holder';
import Desceibtion from './components/Desceibtion';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Holder />} />
        <Route path="/detials/:id"  element={<Desceibtion/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
