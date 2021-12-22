import React, {useEffect, useState} from 'react';
import Pokemon from "../components/DetailPokemon/detailPokemon";
import {useParams} from "react-router-dom";
import '../components/DetailPokemon/detailPokemon.css';

const PokemonDetails = () => {

    const {name} = useParams();

    const [pokemon, setPokemon] = useState({});
    const [error, setError] = useState(false);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await response.json();
            setPokemon(data)
        } catch (err) {
            setError(true)
            throw err;
        }
    };


    useEffect(() => {
        fetchData();
    }, []);

    if (error) {
        return <div>Aucun pokemon !!!</div>;
    }

    return (
        <div className="cards">
            <Pokemon pokemon={pokemon}>

            </Pokemon>
        </div>
    );

};

export default PokemonDetails;