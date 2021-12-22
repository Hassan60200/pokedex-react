import React from 'react';
import Card from "@material-ui/core/Card";

const Pokemon = ({pokemon}) => {
    return (
        <div>
            <h1 className="title">Profil de {pokemon.name}</h1>
            <Card>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/${pokemon.id}.png`}
                    alt={pokemon.name}
                />
            </Card>

            <Card className="cards">
                <h1>{pokemon.name}</h1>
            </Card>
        </div>
    );
};

export default Pokemon;