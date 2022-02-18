import React from 'react'
import { Link } from "react-router-dom";
import "../styles/home.css";
import { useDispatch } from 'react-redux';
import { logoutAsincrono } from '../actions/actionLogin';

export const Home = () => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAsincrono())
  }

  return (
    <div>
        <nav className="navbar">
            <img
            src="https://res.cloudinary.com/julcabh/image/upload/v1644814168/Sprint3/logo-blockBuster_fcx3cy.png"
            alt="logo"
            width="100"
            />
            <h3>Todas</h3>
            <h3>Mas Valoradas</h3>
            <h3>Menos Valoradas</h3>
            <input type="text" placeholder='Busca tu pelicula favorita' ></input>
  
            <img
              onClick={() => handleLogout()}
              src="https://res.cloudinary.com/julcabh/image/upload/v1643585731/login-xxl_rnvlgd.png"
              alt="LogIn"
              width="50"
            />
        </nav>   
    </div>
    /*<Main>
      <Contenedor>
        <Nav>
          <Img
            src="https://res.cloudinary.com/julcabh/image/upload/v1644814168/Sprint3/logo-blockBuster_fcx3cy.png"
            alt="logo"
            width="100"
          />
          <H3>Todas</H3>
          <H3>Mas Valoradas</H3>
          <H3>Menos Valoradas</H3>
          <Input type="text" placeholder='Busca tu pelicula favorita' ></Input>
          <Link to="/login">
            <Img
              src="https://res.cloudinary.com/julcabh/image/upload/v1643585731/login-xxl_rnvlgd.png"
              alt="LogIn"
              width="50"
            />
          </Link>
        </Nav>
      </Contenedor>
    </Main>*/
    
  )
}

