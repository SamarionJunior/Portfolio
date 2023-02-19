import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import ToDo from "./pages/ToDo"

import "./style.css"

const App = _ => {
  return (
    <Routes>
      <Route path="/ToDo" element={<ToDo />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;