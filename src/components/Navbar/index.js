import React from 'react'
import { Link } from 'react-router-dom'

import { isAuthenticated, logout } from "../../services/auth";

import Logo from '../../assets/img/logo.png'
import { Nav, LogoWrapper, Image } from './styles.js'

export default function Navbar(props) {
  function handleLogout(e) {
    logout()
  }

  return (
    <Nav>
      <LogoWrapper href="/">
        <Image src={Logo} alt="logo" />
      </LogoWrapper>
      <div className="menu">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/sobre">
          Escreva para nós
        </Link>
        {isAuthenticated() ? (
          <Link className="link" to="/" onClick={handleLogout}>
            Logout
          </Link>
        ) : (
            <Link className="link" to="/login">
              Login
          </Link>
          )}
      </div>
    </Nav>
  )
}
