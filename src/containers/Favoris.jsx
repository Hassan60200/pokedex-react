import React from 'react';
import Cards from "../components/Card/Cards";

const Favoris = () => {

    const name =localStorage.getItem('name');
    const id =localStorage.getItem('id');

    return (
        <div style={{margin: '100px'}}>
            <Cards name={name} id={id}>
            </Cards>
        </div>
    );
};

export default Favoris;