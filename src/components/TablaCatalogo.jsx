import React from 'react';
import { formatearPrecio } from '../utils/precio';

export const TablaCatalogo = ({ productos = [], onEliminarProducto }) => {
  return (
    <div className="tabla-contenedor">
      <div className="tabla-header">
        <h2>Catálogo Actual ({productos.length} productos)</h2>
      </div>

      {productos.length === 0 ? (
        <p className="mensaje-vacio">No hay productos registrados en el catálogo.</p>
      ) : (
        <div className="tabla-responsive">
          <table className="tabla-productos">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((prod) => (
                <tr key={prod.id}>
                  <td>
                    <img
                      src={prod.imagen || 'https://via.placeholder.com/60'}
                      alt={prod.nombre}
                      className="tabla-thumb"
                    />
                  </td>
                  <td className="font-bold">{prod.nombre}</td>
                  <td>
                    <span className="badge-categoria">{prod.categoria}</span>
                  </td>
                  <td>
                    {typeof formatearPrecio === 'function'
                      ? formatearPrecio(prod.precio)
                      : `$${prod.precio}`}
                  </td>
                  <td>{prod.stock ?? 'N/A'}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => onEliminarProducto(prod.id)}
                      className="btn-eliminar"
                      title="Eliminar producto"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};