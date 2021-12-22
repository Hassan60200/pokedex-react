import React from 'react';
import {CardContent, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";


const Cards = ({name, id}) => {
    return (
        <Card>
            <img
               src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/${id}.png`}
               alt={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Link to={`/pokemon/${name}`}>
                    <img src="https://img.icons8.com/color/50/000000/pokeball-2.png"/>
                </Link>
            </CardContent>
        </Card>
    );
};

export default Cards;