import React, { Component } from 'react'

import Logo from '../../assets/img/logo.png'
import { Nav, LogoWrapper, Image, Link } from './style.js'

export default class Navbar extends Component {
  render() {
    return (
      <Nav>
        <LogoWrapper href="/">
          <Image src={Logo} alt="logo" />
        </LogoWrapper>
        <div className="menu">
          <Link href="/">Home</Link>
          <Link href="/sobre">Escreva para nós</Link>
          <Link href="/login">Login</Link>
        </div>
      </Nav>
    )
  }
}
