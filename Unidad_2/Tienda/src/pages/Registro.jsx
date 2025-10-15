import React from 'react'

function Registro() {
  return (
    <div>
      <h1>Registro</h1>
      <form>
        <input type="text" placeholder="Nombre" /><br/>
        <input type="email" placeholder="Email" /><br/>
        <input type="password" placeholder="Contraseña" /><br/>
        <button type="submit">Registrar</button>
      </form>
    </div>
  )
}

export default Registro
