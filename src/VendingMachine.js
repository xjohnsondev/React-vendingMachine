import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PotatoChip from "./PotatoChip";
import Poptart from "./Poptart";
import Pretzel from "./Pretzel";
import Home from "./Home";
import Nav from "./Nav";

const VendingMachine = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PotatoChip" element={<PotatoChip />} />
          <Route path="/Poptart" element={<Poptart />} />
          <Route path="/Pretzel" element={<Pretzel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default VendingMachine;
