import {createSlice} from '@reduxjs/toolkit';

const data = [
    { id: 1, nombre: "Juano", apellido: "Jimenez" },
    { id: 2, nombre: "Benjamino", apellido: "Nieto" },
    { id: 3, nombre: "Jhonatano", apellido: "Facete" },
    { id: 4, nombre: "Roinero", apellido: "Escobar" },
    { id: 5, nombre: "Joseo", apellido: "Rodriguez" }
];

export const registrosSlice = createSlice({
    name: 'registro',
    initialState: [data],
    reducers: {

    }
})

export default registrosSlice.reducer