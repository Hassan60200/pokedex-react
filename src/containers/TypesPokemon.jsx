import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import DetailsTypes from "../components/DetailTypes/DetailsTypes";


const TypesPokemon = () => {
    const {name} = useParams();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemon] = useState({});

    const fetchData = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/type/${name}`);
            const data = await response.json();

            setPokemon(data.pokemon)
            setLoading(false)
        } catch (err) {
            setError(true)
            throw err;
        }
    };


    useEffect(() => {
        fetchData();
    }, []);

    if (error) {
        return <div style={{margin: '100px'}}>
            <div>Aucun pokemon !!!</div>
            <div style={{margin: '50px'}}>
                <Link to={`/`}>
                    <button>Revenez à la page d'accueil</button>
                </Link>
            </div>
        </div>;
    }

    if (loading) {
        return <div className="center-on-page">
            <div className="pokeball">
                <div className="pokeball__button">

                </div>
            </div>
        </div>;
    }

    return (
        <div>
            <h1 style={{margin: '100px'}}>Voici tous les pokemons de types {name}</h1>
            <span>Pokemons: ({pokemons.length})</span>
            <div className="cardsType">
                {pokemons.map((pokemon) =>
                    <DetailsTypes id={parseInt(pokemon.pokemon.url.substring(34))} key={pokemon.pokemon.url.substring(34)} name={pokemon.pokemon.name}>
                    </DetailsTypes>
                )}
            </div>
        </div>
    );
};

export default TypesPokemon;