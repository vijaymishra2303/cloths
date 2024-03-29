

import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import JewelarPro from "./JewelarPro";
import ProDetails from "./ProDetails";
import ProdCard from "./ProdCard";
import NavBar from "./NavBar";
import MensWear from "./MensWear";

function Routing() {
  return (
    <BrowserRouter>
     <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<ProdCard />} />
        <Route path="/ProDetails/:id" element={<ProDetails />} />
        <Route path="Jewelary" element={<JewelarPro></JewelarPro>} />
        <Route path="Clothes" element={<MensWear></MensWear>} />
      </Routes>

    </BrowserRouter>
  );
}

export default Routing;
