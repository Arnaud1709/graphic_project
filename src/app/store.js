import { configureStore } from "@reduxjs/toolkit";
//Import the reducer
import graphicReducer from '../features/graphic/graphicSlice';

//Store

// Create a reduce store
export default configureStore({
    reducer : {
        graphic: graphicReducer
    }
})