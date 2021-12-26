import React from 'react';
import { Link } from "react-router-dom";

const TypesPokemon = ({name, id}) => {
    console.log(name)
    return (
        <div style={{display: 'flex',}}>
            <button id={id}>
                <Link to={`/type/${name}`} id={id}>
                    {name}
                </Link>
            </button>
        </div>
    );
};

export default TypesPokemon;