import React from 'react';
import { AppBar, Toolbar } from "@material-ui/core";
import Pokedex from '../../assets/img/pokedex.png'

import './Navbar.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <header>
            <AppBar>
                <Toolbar>
                    PokeSearch
                    <img src={Pokedex} className="pokedex" alt=""/>
                    <NavLink className="link" to="/">Pokemons</NavLink>
                    <NavLink className="link" to="/types">Types</NavLink>
                    <NavLink className="link" to="/favoris">Favoris</NavLink>
                    <NavLink className="link" to="/contact">Contact</NavLink>
                </Toolbar>
            </AppBar>
        </header>
    );
};

export default Navbar;