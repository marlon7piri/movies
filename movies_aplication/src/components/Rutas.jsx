import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "../pages/Home";

import PageNotFound from "../pages/PageNotFound";
import Peliculas from "../pages/Peliculas";
import VerDetalles from "../pages/VerDetalles";

export default function Rutas() {
  return (
    <>
     <div className="mb-[30px]"> <NavLink to="/home" className="p-2 text-white">
        <button>Home</button>
      </NavLink>

      <NavLink to="/peliculas" className="p-2 text-white">
        <button>Peliculas</button>
      </NavLink></div>
      <Routes>
        <Route exact path="/" element={<Peliculas />} />
        <Route exact path="/verdetalles/:movieId" element={<VerDetalles />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="*" element={<Peliculas />} />
      </Routes>
    </>
  );
}
