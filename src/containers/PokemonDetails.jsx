import React, {useEffect, useState} from 'react';
import Pokemon from "../components/DetailPokemon/detailPokemon";


const PokemonDetails = () => {

    const fetchData = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
            const data = await response.json();
            const pokemon = await data.results;
            console.log(pokemon)


        } catch (err) {
            throw err;
        }
    };


    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div>
            <Pokemon>
                <h1>test</h1>
            </Pokemon>
        </div>
    );
};

export default PokemonDetails;