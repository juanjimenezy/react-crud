import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table, Button } from "reactstrap";
import { useSelector, useDispatch  } from "react-redux";
import { deleteRegistro } from "../features/registros/registrosSlice";


function Detalle() {
    const registros = useSelector((state) => state.registros);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteRegistro(id));
        console.log('eliminar' + id);
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
                                        <td><Button color='primary'>Editar</Button>
                                            {" "}
                                            <Button color='danger' onClick={() => handleDelete(dato.id)}>Eliminar</Button></td>
                                    </tr>
                                ))} 
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </div>

        </>
    );
}



export default Detalle;