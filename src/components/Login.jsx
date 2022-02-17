import React, { useState } from 'react'
import { Link } from "react-router-dom";
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
        <div id="login-row" class="row justify-content-center align-items-center" >
        <form  onSubmit={handleSubmit}>
            <h1>Iniciar Sesion</h1>
            <button
                onClick={() => handleGoogleAsincrono()}
            >Continuar con Google</button>
            <p>Correo electronico</p>
            <input type="text" placeholder="Ingrese su correo electronico" name="email" onChange={handleInputChange}></input>
            <p>Contraseña</p>
            <input type="password" placeholder="Ingrese su contraseña" name="password" onChange={handleInputChange}></input>
            <br></br>
            <button type="submit">Iniciar Sesion</button>
            <button type="button" onClick={() => handleLogout()}>Salir</button>
            <p><a href="/home">¿Se te olvido tu contraseña?</a></p>
            <p>¿Aun no tienes una cuenta?  <a href="/registro">Registrarse</a></p>
        </form>
    </div>

    )
}
