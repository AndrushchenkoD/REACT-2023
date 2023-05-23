import React from 'react';
import {useDispatch} from "react-redux";
import {countActions} from "../redux/slices/count1slice";

const Countertool = () => {
    const dispatch=useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(countActions.inc(10))}>inc</button>
            <button onClick={()=>dispatch(countActions.dec(2))}>dec</button>
            <button onClick={()=>dispatch(countActions.reset())}>reset</button>
        </div>
    );
};

export default Countertool;