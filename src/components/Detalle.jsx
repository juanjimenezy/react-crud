import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal,  ModalHeader,  ModalBody,  FormGroup,  ModalFooter } from "reactstrap";

 const data = [
     { id: 1, nombre: "Juan", apellido: "Jimenez" },
     { id: 2, nombre: "Benjamin", apellido: "Nieto" },
     { id: 3, nombre: "Jhonatan", apellido: "Facete" },
     { id: 4, nombre: "Roiner", apellido: "Escobar" },
     { id: 5, nombre: "Jose", apellido: "Rodriguez" }
 ];

class Detalle extends React.Component {

    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            id: "",
            nombre: "",
            apellido: "",
        }
    }

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    mostrarModalActualizar = (dato) => {
        this.setState({
            form: dato,
            modalActualizar: true,
        });
    };

    cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
    };

    editar = (dato) => {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
            if (dato.id === registro.id) {
                arreglo[contador].nombre = dato.nombre;
                arreglo[contador].apellido = dato.apellido;
            }
            contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
    };

    eliminar = (dato) => {
        var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento " + dato.id);
        if (opcion === true) {
            var contador = 0;
            var arreglo = this.state.data;
            arreglo.map((registro) => {
                if (dato.id === registro.id) {
                    arreglo.splice(contador, 1);
                }
                contador++;
            });
            this.setState({ data: arreglo, modalActualizar: false });
        }
    };

    render() {
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
                                    {this.state.data.map((dato, idx) => (
                                        <tr key={idx}>
                                            <td>{dato.id}</td>
                                            <td>{dato.nombre}</td>
                                            <td>{dato.apellido}</td>
                                            <td><Button color='primary' onClick={() => this.mostrarModalActualizar(dato)} >Editar</Button>
                                                {" "}
                                                <Button color='danger' onClick={() => this.eliminar(dato)}>Eliminar</Button></td>
                                        </tr>
                                    )
                                    )}
                                </tbody>
                            </Table>
                        </div>
                    </Container>
                </div>

                <Modal isOpen={this.state.modalActualizar}>
                    <ModalHeader>
                        <div><h3>Editar Registro</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <label>Id:</label>
                            <input className="form-control" readOnly type="text" value={this.state.form.id} />
                        </FormGroup>

                        <FormGroup>
                            <label>Personaje: </label>
                            <input className="form-control" name="nombre" type="text" onChange={this.handleChange} value={this.state.form.nombre} />
                        </FormGroup>

                        <FormGroup>
                            <label>Anime:</label>
                            <input className="form-control" name="apellido" type="text" onChange={this.handleChange} value={this.state.form.apellido} />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" onClick={() => this.editar(this.state.form)}>Editar</Button>
                        <Button color="danger" onClick={() => this.cerrarModalActualizar()}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default Detalle;