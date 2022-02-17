import React from 'react'
import { Link } from "react-router-dom";
import { Main, Contenedor, Img, H3, Input, Nav  } from '../styles/homeStyle'

export const Home = () => {
  return (
    <Main>
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
    </Main>
    
  )
}
