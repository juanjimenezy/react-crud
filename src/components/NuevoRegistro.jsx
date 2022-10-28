import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from "react-redux";
import { Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter } from "reactstrap";
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

    const insertarShowHide = () => {
        setInsertar(!insertar);

    };

    const fInsertar = () => {
        console.log("insertar:");
        console.log(registro.nombre)
        
        if(!registro.nombre){
            window.alert('Campo nombre vacio.')
            return;
        }

        if(!registro.apellido){
            window.alert('Campo apellido vacio.')
            return;
        }

        dispatch(addRegistro({ ...registro, id: uuid() }));
        setRegistro({ id: "", nombre: "", apellido: "" });
        setInsertar(!insertar);
    }

    return (
        <>
            <div>
                <Container>
                    <div className='my-2 text-center'>
                        <Button color='success' onClick={() => insertarShowHide()}>nuevo</Button>
                    </div>
                </Container>
            </div>

            <div>
                <Modal isOpen={insertar}>
                        <ModalHeader>
                            <div><h3>Insertar Registro</h3></div>
                        </ModalHeader>
                        <ModalBody>
                            <FormGroup>
                                <label>Nombre:</label>
                                <input className="form-control" name="nombre" type="text" onChange={handleChange} value={registro.nombre} required />
                            </FormGroup>

                            <FormGroup>
                                <label>Apellido:</label>
                                <input className="form-control" name="apellido" type="text" onChange={handleChange} value={registro.apellido} required />
                            </FormGroup>

                        </ModalBody>

                        <ModalFooter>
                            <Button  color="primary" onClick={() => fInsertar()}> Insertar </Button>
                            <Button className="btn btn-danger" onClick={() => insertarShowHide()}>Cancelar</Button>
                        </ModalFooter>
                </Modal>
            </div>
        </>
    )
}

export default NuevoRegistro;