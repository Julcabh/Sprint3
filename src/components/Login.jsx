import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Form, H1, Input, Button, A, P } from '../styles/homeStyle'
import { loginEmailPassAsincrono, loginGoogleAsincrono, logoutAsincrono } from '../actions/actionLogin';
import { useDispatch } from 'react-redux';

export const Login = () => {

    const dispatch = useDispatch();

    const [registro, setRegistro] = useState({
        email: '',
        password: ''
    })

    const {email, password} = registro;

    const handleInputChange = ({ target }) => {
        setRegistro({
            ...registro,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginEmailPassAsincrono(email, password))
    }

    const handleGoogleAsincrono = () => {
        dispatch(loginGoogleAsincrono())
    }

    const handleLogout = () => {
        dispatch(logoutAsincrono())
    }


    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <H1>Iniciar Sesion</H1>
                <Button
                    onClick={() => handleGoogleAsincrono()}
                >Continuar con Google</Button>
                <P>Correo electronico</P>
                <Input type="text" placeholder="Ingrese su correo electronico" name="email" onChange={handleInputChange}></Input>
                <P>Contraseña</P>
                <Input type="password" placeholder="Ingrese su contraseña" name="password" onChange={handleInputChange}></Input>
                <br></br>
                <Button type="submit">Iniciar Sesion</Button>
                <Button type="button" onClick={() => handleLogout()}>Salir</Button>
                <P><A href="/home">¿Se te olvido tu contraseña?</A></P>
                <P>¿Aun no tienes una cuenta?  <A href="/registro">Registrarse</A></P>
            </Form>
        </div>

    )
}
