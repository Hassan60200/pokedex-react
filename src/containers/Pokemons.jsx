import React, {useEffect, useState} from 'react';
import Cards from "../components/Card/Cards";
import "../components/Card/card.css";

const Pokemons = ({pokemon = []}) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    const fetchData = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokedex/2');
            const data = await response.json();
            const pokemon = await data['pokemon_entries'];

            setData(pokemon);
            setLoading(false);

        } catch (err) {
            setError(true);
            throw err;
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (error) {
        return <div>Aucun pokemon !!!</div>;
    }

    if (loading) {
        return <div className="center-on-page">
            <div className="pokeball">
                <div className="pokeball__button">

                </div>
            </div>
        </div>;
    }

    return <div className="cards">
        {data.map((pokemon) =>
            <Cards id={pokemon.entry_number} key={pokemon.entry_number} name={pokemon['pokemon_species'].name}>

            </Cards>
        )}

    </div>;
};

export default Pokemons;