import React, {useEffect, useState} from 'react';

const Pokemons = ({pokemon = []}) => {

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    const fetchData = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokedex/2');
            const data = await response.json();
            const pokemon = data['pokemon_entries'];
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
        return <div>ERROR</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return <div>
        {}
        {data.map((pokemon) => <li>{pokemon['pokemon_species'].name}</li>)}
    </div>;
};

export default Pokemons;