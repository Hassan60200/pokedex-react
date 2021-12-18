import React from 'react';
import { AppBar, Toolbar } from "@material-ui/core";
import Pokedex from '../../assets/img/pokedex.png'

import './Navbar.css';


const Navbar = () => {
    return (
        <header>
            <AppBar>
                <Toolbar>
                    PokeSearch
                    <img src={Pokedex} className="pokedex" alt=""/>
                </Toolbar>

            </AppBar>
        </header>
    );
};

export default Navbar;