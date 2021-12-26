import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import TypesPokemon from "../components/Types/TypesPokemon";
const Types = () => {

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [types, setTypes] = useState({});

    const fetchTypes = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/type');
            const data = await response.json();

            setTypes(data.results);
            setLoading(false);

        } catch (err) {
            setError(true);
            throw err;
        }
    };

    useEffect(() => {
        fetchTypes();
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

    return (
        <div>
            {types.map((type, index) =>
                <TypesPokemon key={index} id={index + 1} name={type.name}>
                    {type.name}
                </TypesPokemon>
            )}

        </div>
    );
};

export default Types;