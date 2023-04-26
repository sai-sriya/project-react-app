import React from "react";
import Login from "./Login.js";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Create from "./Create.js";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
