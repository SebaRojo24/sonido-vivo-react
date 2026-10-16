import React, { useState, useEffect } from "react";
import { Container, Card, Button, Modal } from "react-bootstrap";
import Registro from "../Registro.jsx";
import TablaUsuarios from "../../components/TablaUsuarios.jsx";
import { obtenerFormulario, guardarFormulario } from "../../utils/persistencia.js";

function AdminUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const datosGuardados = obtenerFormulario("usuarios");
    setUsuarios(datosGuardados || []);
  }, []);

  const abrirModal = () => setShowModal(true);
  const cerrarModal = () => setShowModal(false);


  const agregarUsuario = (nuevoUsuario) => {
    const listaActualizada = guardarFormulario("usuarios", nuevoUsuario);
    setUsuarios(listaActualizada);
    cerrarModal();
  };

  return (
    <Container className="py-4">
      <Card className="shadow-sm p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Gestión de Usuarios</h2>
          <Button variant="success" onClick={abrirModal}>
            + Nuevo Usuario
          </Button>
        </div>

        <TablaUsuarios usuarios={usuarios} />
      </Card>

      {/* Renderizado condicional para reiniciar los errores/campos del formulario al cerrar */}
      {showModal && (
        <Modal show={showModal} onHide={cerrarModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Nuevo Usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Registro 
              esAdmin={true} 
              onGuardar={agregarUsuario} 
              onCancelar={cerrarModal}
            />
          </Modal.Body>
        </Modal>
      )}
    </Container>
  );
}

export default AdminUsuarios;