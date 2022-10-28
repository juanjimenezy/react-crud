import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table, Button, Modal, ModalHeader, ModalBody, FormGroup,ModalFooter } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { editRegistro,deleteRegistro } from "../features/registros/registrosSlice";


function Detalle() {
    const registros = useSelector((state) => state.registros);
    const [registro, setRegistro] = React.useState({id: "", nombre: "", apellido: ""});
    const [actualizar, setActualizar] = React.useState(false);
    const dispatch = useDispatch();

    const handleDelete = (dato) => {
        var opcion = window.confirm("Estás Seguro que deseas a " + dato.nombre);
        if (opcion === true) {
            dispatch(deleteRegistro(dato.id));
            setRegistro({id: "", nombre: "", apellido: ""});
        }
    };

    const handleChange = (e) => {
        setRegistro({
          ...registro,
          [e.target.name]: e.target.value,
        });
      };

    const actualizarShowHide = (dato) => {
        setActualizar(!actualizar);
        console.log(dato);

        if(dato){
            setRegistro({id: dato.id, nombre: dato.nombre, apellido: dato.apellido});
        }
    };

    const editar = () => {

        if(!registro.nombre){
            window.alert('Campo nombre vacio.')
            return;
        }

        if(!registro.apellido){
            window.alert('Campo apellido vacio.')
            return;
        }

        dispatch(editRegistro({ ...registro, id: registro.id }));
        setActualizar(!actualizar);
    }

    return (
        <>
            <div className='my-2 text-center'>
                <Container>
                    <div className='my-5 text-center'>
                        <Table>
                            <thead>
                                <tr>
                                    {/* <th>Id</th> */}
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                {registros.map((dato, key) => (
                                    <tr key={key}>
                                        {/* <td>{dato.id}</td> */}
                                        <td>{dato.nombre}</td>
                                        <td>{dato.apellido}</td>
                                        <td><Button color='secondary' onClick={() => actualizarShowHide(dato)}>Editar</Button>
                                            {" "}
                                            <Button color='danger' onClick={() => handleDelete(dato)}>Eliminar</Button></td>
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
                        <input className="form-control" readOnly type="text" value={registro.id}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Nombre: </label>
                        <input className="form-control" name="nombre" type="text" onChange={handleChange} value={registro.nombre} required/>
                    </FormGroup>

                    <FormGroup>
                        <label>Apellido:</label>
                        <input className="form-control" name="apellido" type="text" onChange={handleChange} value={registro.apellido} required/>
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                        <Button color="primary" onClick={() => editar()} >Actualizar</Button>
                        <Button color="danger" onClick={() => actualizarShowHide(null)}>Cancelar</Button>
                </ModalFooter>
            </Modal>

        </>
    );
}



export default Detalle;