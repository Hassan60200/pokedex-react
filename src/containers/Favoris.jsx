import React, {useEffect, useState} from 'react';
import Cards from "../components/Card/Cards";
import {Link} from "react-router-dom";

const Favoris = () => {

    const favs = JSON.parse(localStorage.getItem('pokemons'));

    if (!favs) {
        return <div style={{margin: '100px'}}>
            <div>Aucun pokemon favoris!!!</div>
            <div style={{margin: '50px'}}>
                <Link to={`/`}>
                    <button>Revenez à la page d'accueil</button>
                </Link>
            </div>
        </div>;
    }

    return (
        <div style={{margin: '100px'}}>
            {favs.map((fav) =>
                <Cards key={fav.id} id={fav.id} name={fav.name}>
                </Cards>
                )}

        </div>
    );
};

export default Favoris;