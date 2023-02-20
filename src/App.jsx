import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import ToDo from "./pages/ToDo"

import "./style.css"

const App = _ => {
  return (
    <Routes>
      <Route exact path="/ToDo" element={<ToDo />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}

export default App;