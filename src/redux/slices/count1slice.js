import {createSlice} from "@reduxjs/toolkit";

const initialState={count:0}

const count1slice = createSlice({
    name:'count1slice',
      initialState,
    reducers:{
        inc:(state, action) => {
            state.count+=action.payload;
        },
        dec:(state, action) => {
            state.count-=action.payload;
        },
        reset:(state, action) => {
            state.count=0
        }
    }
})

const {reducer:count1Reducer,actions:{dec,reset,inc}}=count1slice;

const countActions={
    dec,
    inc,
    reset
}

export {countActions,count1Reducer};