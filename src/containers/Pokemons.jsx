import React, {useEffect, useState} from 'react';
import Cards from "../components/Card/Cards";
import "../components/Card/card.css";

import Form from "../components/Form";
import {Link} from "react-router-dom";


const Pokemons = ({pokemon = []}) => {

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [search, setSearch] = useState(data);
    const [text, setText] = useState("");

    const fetchData = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokedex/2');
            const data = await response.json();
            const pokemon = await data['pokemon_entries'];
            setData(pokemon);
            setSearch(pokemon)
            setLoading(false);

        } catch (err) {
            setError(true);
            throw err;
        }
    };

    const handleSearch = (e) => {
        const value = e.target.value;

        setText(value)
        setSearch(
            data.filter((pokemon) =>
                pokemon.pokemon_species.name.toLowerCase().includes(value.toLowerCase())
            )
        );
    };


    useEffect(() => {
        fetchData();

    }, []);

    if (error) {
        return <div style={{margin: '100px'}}>
            <div>ERROR 404 !!!!!!!!!!</div>
            <div style={{margin: '50px'}}>
                <Link to={`/`}>
                    <button>Revenez à la page d'accueil</button>
                </Link>
            </div>
        </div>
    }

    if (loading) {
        return <div className="center-on-page">
            <div className="pokeball">
                <div className="pokeball__button">

                </div>
            </div>
        </div>;
    }

    return <>
        <div style={{margin: '100px'}}>
            <Form text={text} handleChange={handleSearch}>

            </Form>
        </div>

        <div className="cards">
            {search.map((pokemon) =>
                <Cards id={pokemon.entry_number} key={pokemon.entry_number} name={pokemon.pokemon_species.name}>

                </Cards>
            )}
        </div>
    </>;
};

export default Pokemons;