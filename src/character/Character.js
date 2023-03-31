import React from 'react';

const Character = (props) => {
    let {id,name,status,species,gender,image}=props;
    return (
        <div>
            <p>{id}</p>
            <h2>{name}</h2>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <img src={image} alt=""/>
        </div>
    );
};

export default Character;