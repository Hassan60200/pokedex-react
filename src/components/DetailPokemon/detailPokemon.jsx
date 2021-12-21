import React from 'react';
import Card from "@material-ui/core/Card";

const Pokemon = ({id, type, name}) => {
    return (
        <div>
            <h1>test</h1>
            <Card>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/${id}.png`}
                />
            </Card>

            <Card>
                <h1>{name}</h1>
            </Card>
        </div>
    );
};

export default Pokemon;