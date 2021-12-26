import React from 'react';
import Card from "@material-ui/core/Card";

const Pokemon = ({pokemon}) => {

    console.log(pokemon)

    return (
        <div className="details">
            <h1 className="title">Profil de {pokemon.name}</h1>

            <div>
                <Card>
                    <div>
                        <h1>Pokemon n°{pokemon.id}</h1>
                    </div>
                    <div>
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                            alt={pokemon.name}
                        />
                        <ul>
                            <li>Taille: {pokemon.height / 10} m</li>
                            <li>Poids:{pokemon.weight / 10} kg</li>
                            <p>Talents: {pokemon.abilities.map((talent) =>
                                <li key={talent.slot}>{talent.ability.name}</li>
                            )}</p>
                            <p>Types:{pokemon.types.map(t => (
                                <li key={t.type.name}>
                                    <span className={`${t.type.name} badge badge-pill mr-1 rounded px-4 py-1`}
                                         style={{color: 'white'}}>
                                        {t.type.name.toUpperCase()}
                                    </span>
                                </li>
                            ))}
                            </p>
                            <p>Statistiques:
                                {pokemon.stats.map((stat, index) =>
                                    <li key={index}>{stat.stat.name} :{stat.base_stat}</li>
                                )}
                            </p>
                            <p>Attaques:
                                {pokemon.moves.slice(0, 3).map((move, index) =>
                                    <li key={index}>{move.move.name}</li>
                                )}
                            </p>
                        </ul>
                    </div>

                </Card>
            </div>
        </div>
    );
};

export default Pokemon;