import React from 'react'
import { useParams } from 'react-router-dom'

function Producto() {
  const { id } = useParams()
  return (
    <div>
      <h1>Producto {id}</h1>
      <p>Detalles del producto...</p>
    </div>
  )
}

export default Producto
