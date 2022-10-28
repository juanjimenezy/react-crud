import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table, Button, Modal, ModalHeader, ModalBody, FormGroup,ModalFooter } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteRegistro } from "../features/registros/registrosSlice";


function Detalle() {
    const registros = useSelector((state) => state.registros);
    const [registro, setRegistro] = React.useState();
    const [actualizar, setActualizar] = React.useState(false);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento " + id);
        if (opcion === true) {
            dispatch(deleteRegistro(id));
            console.log('eliminar' + id);
        }
    };

    const actualizarShowHide = (dato) => {
        setActualizar(!actualizar);
        console.log(dato);

        if(dato){
            setRegistro({id: dato.id});
        }
    };

    return (
        <>
            <div className='my-2 text-center'>
                <Container>
                    <div className='my-5 text-center'>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                {registros.map((dato, key) => (
                                    <tr key={key}>
                                        <td>{dato.id}</td>
                                        <td>{dato.nombre}</td>
                                        <td>{dato.apellido}</td>
                                        <td><Button color='primary' onClick={() => actualizarShowHide(dato)}>Editar</Button>
                                            {" "}
                                            <Button color='danger' onClick={() => handleDelete(dato.id)}>Eliminar</Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </div>

            <Modal isOpen={actualizar}>
                <ModalHeader>
                    <div><h3>Editar Registro</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <label>Id:</label>
                        <input className="form-control" readOnly type="text" />
                    </FormGroup>

                    <FormGroup>
                        <label>Nombre: </label>
                        <input className="form-control" name="nombre" type="text" />
                    </FormGroup>

                    <FormGroup>
                        <label>Apellido:</label>
                        <input className="form-control" name="apellido" type="text" />
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                        <Button color="primary" >Editar</Button>
                        <Button color="danger" onClick={actualizarShowHide}>Cancelar</Button>
                </ModalFooter>
            </Modal>

        </>
    );
}



export default Detalle;