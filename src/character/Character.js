import React from 'react';

const Character = (props) => {
    let {name,desc,pic}=props;
    return (
        <div>
            <h2>{name}</h2>
            <p>{desc}</p>
            <img src={pic} alt=""/>
        </div>
    );
};

export default Character;