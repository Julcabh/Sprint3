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
      <Form onSubmit={handleSubmit}>
        <H1>Registrar cuenta</H1>
        <P>Nombre</P>
        <Input type="text" placeholder="Ingrese su Nombre" name="nombre" onChange={handleInputChange}></Input>
        <P>Correo electronico</P>
        <Input type="text" placeholder="Ingrese su correo electronico" name="email" onChange={handleInputChange}></Input>
        <P>Contraseña</P>
        <Input type="password" placeholder="Ingrese su contraseña" name="pass1" onChange={handleInputChange}></Input>
        <P>Repita su contraseña</P>
        <Input type="password" placeholder="Ingrese su contraseña" name="pass2" onChange={handleInputChange}></Input>
        <br></br>
        <Button>Registrar cuenta</Button>
        <P>¿Ya tienes una cuenta?  <A href="/login">Iniciar sesion</A></P>
      </Form>
    </div>

  )
}
