import React from 'react'
import { Link } from 'react-router-dom'

function ProductoCard({ producto }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
      <h3>{producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
      <Link to={`/producto/${producto.id}`}>Ver detalle</Link>
    </div>
  )
}

export default ProductoCard
