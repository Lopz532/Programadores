import React from 'react'

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Usuario" /><br/>
        <input type="password" placeholder="Contraseña" /><br/>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  )
}

export default Login
