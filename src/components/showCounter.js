import React from 'react';
import {useSelector} from "react-redux";


const ShowCounter = () => {
    const {count} = useSelector(state=>state.count1Reducer);
    return (
        <div>
            <h1>Count:{count}</h1>
        </div>
    );
};

export default ShowCounter;