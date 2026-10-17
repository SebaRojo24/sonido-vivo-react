import React from "react";
import { Table } from "react-bootstrap";

function TablaUsuarios({ usuarios }) {
  if (!usuarios || usuarios.length === 0) {
    return <p className="text-muted mt-3 text-center">No hay usuarios registrados aún.</p>;
  }

  return (
    <Table striped bordered hover responsive className="mt-3 align-middle">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>RUT</th>
          <th>Email</th>
          <th>Región</th>
          <th>Comuna</th>
          <th>Dirección</th>
          <th>Categoría</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((user, index) => (
          <tr key={index}>
            <td>{user.nombre}</td>
            <td>{user.apellido}</td>
            <td>{user.rut}</td>
            <td>{user.email}</td>
            <td>{user.region}</td>
            <td>{user.comuna}</td>
            <td>{user.direccion}</td>
            <td>{user.categoria}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TablaUsuarios;