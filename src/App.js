import Navbar from './components/Header/Navbar';
import { Routes, Route } from "react-router-dom";
import Pokemons from "./containers/Pokemons";
import PokemonDetails from "./containers/PokemonDetails";
import Contact from "./containers/Pokemons";


import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar />
        <Routes>
            <Route path="/" element={<Pokemons />} />
            <Route path="/pokemon/:name" element={<PokemonDetails />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
