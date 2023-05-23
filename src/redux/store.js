import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {countReducer} from "./slices/countSlice";

const rootReducer=combineReducers({countReducer});

const setupStore=()=>configureStore({
    reducer:rootReducer
});

export {setupStore};