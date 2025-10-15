import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <Link to="/" style={{ margin: '0 1rem' }}>Home</Link>
      <Link to="/carrito" style={{ margin: '0 1rem' }}>Carrito</Link>
      <Link to="/login" style={{ margin: '0 1rem' }}>Login</Link>
      <Link to="/registro" style={{ margin: '0 1rem' }}>Registro</Link>
    </nav>
  )
}

export default Navbar
