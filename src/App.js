import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';
import { useSelector } from "react-redux";

function App() {

 // const regState = useSelector(state => state.registros);
  //console.log(regState);

  return (
    <div>
      <Formulario/>
    </div>
  );
}

export default App;
