import React, {useEffect, useState} from 'react';
import Cards from "../components/Card/Cards";
import {Link} from "react-router-dom";

const Favoris = () => {

    const [error, setError] = useState(false);
    const [name, setName] = useState('');
    const [id, setId] = useState('');


    const fetchFavs = async () => {
        try {
            const name =localStorage.getItem('name');
            const id =localStorage.getItem('id');
            setName(name)
            setId(id)
        } catch (err) {
            setError(true)
            throw err;
        }
    };

    useEffect(() =>{
        fetchFavs()
    }, [])

    if (!id && !name) {
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
            <Cards name={name} id={id}>
            </Cards>
        </div>
    );
};

export default Favoris;