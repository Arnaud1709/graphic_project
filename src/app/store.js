import { configureStore } from "@reduxjs/toolkit";
import graphicReducer from '../graphic/graphicSlice';
//Import the reducer

//Store

// Create a reduce store
export default configureStore({
    reducer : {
        graphic: graphicReducer
    }
})