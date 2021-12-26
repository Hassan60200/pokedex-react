import React from 'react';
import { Link } from "react-router-dom";

const TypesPokemon = ({name, id}) => {

    return (
        <div>
            <button className={`${name}`}   id={id}>
                <Link style={{textDecoration: 'none', textTransform: 'capitalize', color: 'white'}} to={`/type/${name}`} id={id}>
                    {name}
                </Link>
            </button>
        </div>
    );
};

export default TypesPokemon;