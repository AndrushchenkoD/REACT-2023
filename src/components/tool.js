import React from 'react';
import {useDispatch} from "react-redux";
import {countAction} from "../redux/slices/countSlice";

const Tool = () => {
    const dispatch=useDispatch();
    return (
        <div>
          <button onClick={()=>{dispatch(countAction.inc(3))}}>inc</button>
          <button onClick={()=>{dispatch(countAction.dec(2))}}>dec</button>
          <button onClick={()=>{dispatch(countAction.reset())}}>res</button>
        </div>
    );
};

export default Tool;