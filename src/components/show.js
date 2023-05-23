import React from 'react';
import {useSelector} from "react-redux";

const Show = () => {
    const {count}=useSelector(state => state.countReducer);
    return (
        <div>
            <h1>Count:{count}</h1>
        </div>
    );
};

export default Show;