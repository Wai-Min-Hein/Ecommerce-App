import React from "react";
import "../css/output.css";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./Pages/AllProducts";
import RenderingAllPages from "./Pages/RenderingAllPages";
import MyCart from "./Pages/MyCart";
import Fav from "./Pages/Fav";
import Detail from "./Pages/Detail";

import '../node_modules/animate.css/animate.min.css';

const App = () => {
  return (
    <div className="container mx-auto relative">
      <Nav />

      <Routes>
        <Route path="/" element={<RenderingAllPages />} />
        <Route path="/all" element={<AllProducts />} />
        <Route path="/cart" element={<MyCart />} />
        <Route path="/favorite" element={<Fav />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
