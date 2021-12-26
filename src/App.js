import Navbar from './components/Header/Navbar';
import { Routes, Route } from "react-router-dom";
import Pokemons from "./containers/Pokemons";
import PokemonDetails from "./containers/PokemonDetails";
import Types from "./containers/Types";
import Contact from "./containers/Pokemons";
import TypesPokemon from "./containers/TypesPokemon";
import Favoris from "./containers/Favoris";

import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar />
        <Routes>
            <Route path="/" element={<Pokemons />} />
            <Route path="/pokemon/:name" element={<PokemonDetails />} />
            <Route path="/types" element={<Types />} />
            <Route path="/type/:name" element={<TypesPokemon />} />
            <Route path="/favoris" element={<Favoris />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
