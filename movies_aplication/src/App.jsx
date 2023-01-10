import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Rutas from "./components/Rutas";
import Peliculas from "./pages/Peliculas";

function App() {
  return (
    <Router>
  
        <h1 className="lg:text-6xl mb-6 text-blue-500  p-4 md:text-2xl sm:text-sm">App</h1>

        <h2 className="lg:text-4xl mb-6 text-blue-600 md:text-2xl sm:text-sm">Aplicacion de Peliculas</h2>
     
        <Rutas/>
    </Router>
  );
}

export default App;
