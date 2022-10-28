import {createSlice} from '@reduxjs/toolkit';

const initialState  = [
    { id: 1, nombre: "Juan", apellido: "Jimenez" },
    { id: 2, nombre: "Benjamin", apellido: "Nieto" },
    { id: 3, nombre: "Jhonatan", apellido: "Facete" },
    { id: 4, nombre: "Roiner", apellido: "Escobar" },
    { id: 5, nombre: "Jose", apellido: "Rodriguez" }
];

 const registrosSlice = createSlice({
    name: 'registros',
    initialState,
    reducers: {
          addRegistro: (state, action) => {
            state.push(action.payload);
          },
          editRegistro: (state, action) => {
            const { id, nombre, apellido } = action.payload;
            const foundRegistro = state.find((registro) => registro.id === id);
            if (foundRegistro) {
                foundRegistro.nombre = nombre;
                foundRegistro.apellido = apellido;
            }
          },
          deleteRegistro: (state, action) => {
            const foundRegistro = state.find((task) => task.id === action.payload);
            if (foundRegistro) {
              state.splice(state.indexOf(foundRegistro), 1);
            }
          },
    }
})


export const {deleteRegistro} = registrosSlice.actions;
export default registrosSlice.reducer