import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {count1Reducer} from "./slices/count1slice";


let rootReducer = combineReducers({count1Reducer});

const setupStore = () => configureStore({
    reducer:rootReducer
})

export {setupStore};