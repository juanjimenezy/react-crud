import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from "react-redux";
import { Button, Container } from "reactstrap";
import { addRegistro } from "../features/registros/registrosSlice";
import { v4 as uuid } from "uuid";

function NuevoRegistro() {

    const [registro, setRegistro] = React.useState({ id: "", nombre: "", apellido: "" });
    const [insertar, setInsertar] = React.useState(false);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setRegistro({
            ...registro,
            [e.target.name]: e.target.value,
        });
    };

    const fInsertar = () => {
        console.log("insertar:");
        console.log(registro.nombre)

        if (!registro.nombre) {
            window.alert('Campo nombre vacio.')
            return;
        }

        if (!registro.apellido) {
            window.alert('Campo apellido vacio.')
            return;
        }

        dispatch(addRegistro({ ...registro, id: uuid() }));
        setRegistro({ id: "", nombre: "", apellido: "" });
        setInsertar(!insertar);
    }

    return (
        <>
        <Container>
            <div className='text-center'>
                <label>Nombre:</label>
                <input className="form-control" name="nombre" type="text" onChange={handleChange} value={registro.nombre} required />

                <label>Apellido:</label>
                <input className="form-control" name="apellido" type="text" onChange={handleChange} value={registro.apellido} required />
                <div className="my-1">
                    <Button color="primary" onClick={() => fInsertar()}> Insertar </Button>
                </div>
            </div>
        </Container>
        </>
    )
}

export default NuevoRegistro;