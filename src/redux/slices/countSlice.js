import {createSlice} from "@reduxjs/toolkit";

const initialState={count:0}

const countSlice = createSlice({
    name:'countSlice',
    initialState,
    reducers:{
inc:(state, action) => {
    state.count+=action.payload;
},
        dec:(state, action) => {
    state.count-=action.payload;
        },
        reset:(state, action) => {
    state.count=0;
        }
    }
})

const {reducer:countReducer,actions:{dec,reset,inc}}=countSlice;

const countAction={
    dec,inc,reset
};

export {
    countReducer,countAction
}
