import React from 'react';
import Card from "@material-ui/core/Card";
import {Radar} from 'react-chartjs-2';
import {
    Chart, RadialLinearScale,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
} from "chart.js";

Chart.register(ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip);
const Pokemon = ({pokemon}) => {

    const value = [...pokemon.stats];

    const data = {
        labels: [value[0].stat.name, value[1].stat.name, value[2].stat.name, value[3].stat.name, value[4].stat.name, value[5].stat.name],
        datasets: [
            {
                data: [value[0].base_stat, value[1].base_stat, value[2].base_stat, value[3].base_stat, value[4].base_stat, value[5].base_stat],
                backgroundColor: [
                    '#de0021',
                ]
            }
        ]
    }

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
                        <Radar data={data} type="radar"/>
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