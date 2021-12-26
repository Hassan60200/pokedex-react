import React from 'react';
import Card from "@material-ui/core/Card";
import {CardContent, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const DetailsTypes = ({name, id}) => {

    return (
        <div>
            <Card>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{textTransform: 'capitalize'}}>
                        N°{id}  {name}
                    </Typography>
                    <Link to={`/pokemon/${name}`}>
                        <img src="https://img.icons8.com/color/50/000000/pokeball-2.png"/>
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
};

export default DetailsTypes;