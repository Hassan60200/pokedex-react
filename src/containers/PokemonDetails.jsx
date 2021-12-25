import React, {useEffect, useState} from 'react';
import Pokemon from "../components/DetailPokemon/detailPokemon";
import {Link, useParams} from "react-router-dom";
import '../components/DetailPokemon/detailPokemon.css';

const PokemonDetails = () => {

    const {name} = useParams();

    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await response.json();
            setPokemon(data)
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
        <div className="card">
            <Pokemon pokemon={pokemon}>

            </Pokemon>
        </div>
    );

};

export default PokemonDetails;