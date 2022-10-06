import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Projects from "./components/Projects";
import Ods from "./components/Ods";

function App() {
  return (
    <Routes>
      <Route path="/ods" element={<Ods />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
