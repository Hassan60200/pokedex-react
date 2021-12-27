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
                label: 'Statistiques',
                data: [value[0].base_stat, value[1].base_stat, value[2].base_stat, value[3].base_stat, value[4].base_stat, value[5].base_stat],
                backgroundColor: [
                    '#de0021',
                ]
            }
        ]
    }

    const pokemons = JSON.parse(localStorage.getItem('pokemons'));

    const handleFavsPokemon = () => {
        let fav = [];
        if (pokemons != null || pokemons != undefined){
            fav = pokemons;
        }
        fav.push({id: pokemon.id, name: pokemon.name})

        localStorage.setItem('pokemons', JSON.stringify(fav));
    }

    function clearCache() {
        const pokemons = JSON.parse(localStorage.getItem('pokemons'));

        const newFavs = pokemons.filter((fav) =>{

            if ( fav.id !== pokemon.id){
                return fav
            }
        })
        localStorage.setItem("pokemons", JSON.stringify(newFavs));
    }


    return (
        <div className="details">
            <h1 className="title">Profil de {pokemon.name} n°{pokemon.id}</h1>
            <div>
                <Card>
                    <div className="row">
                        <div className="col-6">
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                                alt={pokemon.name}
                            />
                            <div>
                                <button onClick={handleFavsPokemon}>Ajouter en favoris</button>
                                <button onClick={clearCache}>Supprimer des favoris</button>
                            </div>
                        </div>
                        <div className="col-4 m-5" style={{border: '1px solid black', backgroundColor: 'grey', color: 'white'}}>
                            <div className="row">
                                <div className="col-6 mt-3">
                                    <span>Taille {pokemon.height / 10} m</span><br/>
                                    <span>Poids {pokemon.weight / 10} kg</span>
                                </div>
                                <div className="col-6 mt-3 ">
                                <span>Talents: {pokemon.abilities.map((talent) =>
                                    <li style={{fontWeight: 'bold', color: 'black'}} key={talent.slot}>{talent.ability.name}</li>
                                )}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-5 mt-3">
                                       <span>Types{pokemon.types.map(t => (
                                           <li key={t.type.name}>
                                    <span className={`${t.type.name} badge badge-pill mr-1 rounded px-4 py-1`}
                                          style={{color: 'white'}}>
                                        {t.type.name.toUpperCase()}
                                    </span>
                                           </li>
                                       ))}
                            </span>
                                </div>
                                <div className="col-7 mt-3">
                                <span>Attaques
                                    {pokemon.moves.slice(0, 3).map((move, index) =>
                                        <li style={{fontWeight: 'bold', color:'black'}} key={index}>{move.move.name}</li>
                                    )}
                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 offset-3">
                            <Radar data={data} type="radar"/>
                        </div>
                    </div>

                </Card>
            </div>
        </div>
    );
};

export default Pokemon;