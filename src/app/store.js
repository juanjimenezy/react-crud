import {configureStore} from '@reduxjs/toolkit';
import registrosReducer from "../features/registros/registrosSlice";

export const store = configureStore({
    reducer:{
        registros: registrosReducer,
    }
    

})