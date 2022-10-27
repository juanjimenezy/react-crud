import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter, } from "reactstrap";

class NuevoRegistro extends React.Component {

    state = {
        modalInsertar: false,
        form: {
            nombre: "",
            apellido: "",
        }
    }

    mostrarModalInsertar = () => {
        this.setState({
            modalInsertar: true,
        });
    };

    cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
    };

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    render() {
        return (
            <>
                <div>
                    <Container>
                        <div className='my-2 text-center'>
                            <Button color='success' onClick={() => this.mostrarModalInsertar()}>nuevo</Button>
                        </div>
                    </Container>
                </div>

                <div>
                    <Modal isOpen={this.state.modalInsertar}>
                        <ModalHeader>
                            <div><h3>Insertar Personaje</h3></div>
                        </ModalHeader>

                        <ModalBody>
                            {/* <FormGroup>
                                <label>Id:</label>
                                <input className="form-control" readOnly type="text" />
                            </FormGroup> */}

                            <FormGroup>
                                <label>Nombre:</label>
                                <input className="form-control" name="nombre" type="text" onChange={this.handleChange}/>
                            </FormGroup>

                            <FormGroup>
                                <label>Apellido:</label>
                                <input className="form-control" name="apellido" type="text" onChange={this.handleChange}/>
                            </FormGroup>

                        </ModalBody>

                        <ModalFooter>
                            <Button color="primary" onClick={() => this.insertar()}> Insertar </Button>
                            <Button className="btn btn-danger" onClick={() => this.cerrarModalInsertar()}>Cancelar</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </>
        )
    }
}
export default NuevoRegistro;