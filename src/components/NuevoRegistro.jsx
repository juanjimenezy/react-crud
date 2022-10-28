import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch } from "react-redux";
import {Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter} from "reactstrap";
import { addRegistro } from "../features/registros/registrosSlice";
import { v4 as uuid } from "uuid";

function NuevoRegistro() {

    const [registro, setRegistro] = React.useState({id: "", nombre: "", apellido: ""});
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

    const fInsertar = (dato) => {
        dispatch(addRegistro({ ...registro, id: uuid() }));
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
                        <div><h3>Insertar Personaje</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <label>Nombre:</label>
                            <input className="form-control" name="nombre" type="text" onChange={handleChange} value={registro.nombre}/>
                        </FormGroup>

                        <FormGroup>
                            <label>Apellido:</label>
                            <input className="form-control" name="apellido" type="text" onChange={handleChange} value={registro.apellido}/>
                        </FormGroup>

                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" onClick={() => fInsertar()}> Insertar </Button>
                        <Button className="btn btn-danger" onClick={() => insertarShowHide()}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </>
    )
}

export default NuevoRegistro;