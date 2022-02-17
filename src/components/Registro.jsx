import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { registroAsincrono } from '../actions/actionRegistro';
import { Form, H1, Input, Button, A, P } from '../styles/homeStyle'

export const Registro = () => {

  const dispatch = useDispatch()
  const [registro, setRegistro] = useState({
    nombre: '',
    email: '',
    pass1: '',
    pass2: ''
  })

  const {nombre, email, pass1, pass2} = registro;

  const handleInputChange = ({ target }) => {
    setRegistro({
      ...registro,
      [target.name]: target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registroAsincrono(email, pass1, nombre))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Registrar cuenta</h1>
        <p>Nombre</p>
        <input type="text" placeholder="Ingrese su Nombre" name="nombre" onChange={handleInputChange}></input>
        <p>Correo electronico</p>
        <input type="text" placeholder="Ingrese su correo electronico" name="email" onChange={handleInputChange}></input>
        <p>Contraseña</p>
        <input type="password" placeholder="Ingrese su contraseña" name="pass1" onChange={handleInputChange}></input>
        <p>Repita su contraseña</p>
        <input type="password" placeholder="Ingrese su contraseña" name="pass2" onChange={handleInputChange}></input>
        <br></br>
        <button>Registrar cuenta</button>
        <p>¿Ya tienes una cuenta?  <a href="/login">Iniciar sesion</a></p>
      </form>
    </div>

  )
}
