import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserCircle,
  faEnvelope,
  faUser,
  faLock
} from '@fortawesome/free-solid-svg-icons'
import Navbar from '../../components/Navbar'

import { Container, Title, SignButtons, Field, Button } from './styles'

export default function Login() {
  const [login, setLogin] = useState(true)

  let name = (
    <Field>
      <label htmlFor="name">Seu nome completo</label>
      <FontAwesomeIcon icon={faUserCircle} size="lg" />
      <input type="text" name="name" placeholder="Seu nome" />
    </Field>
  )

  let email = (
    <Field>
      <label htmlFor="email">Seu melhor email</label>
      <FontAwesomeIcon icon={faEnvelope} size="lg" />
      <input type="text" name="email" placeholder="E-mail completo" />
    </Field>
  )

  function handleLoginClick() {
    setLogin(true)
  }

  function handleRegisterClick() {
    setLogin(false)
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (login) {
      console.log('Logou')
    } else {
      console.log('Cadastrou')
    }
  }

  return (
    <>
      <Navbar />
      {login ? <Title>Entrar</Title> : <Title>Cadastrar</Title>}
      <Container>
        <SignButtons>
          <button
            type="button"
            className={login ? 'selected' : ''}
            onClick={handleLoginClick}
            style={{ borderRight: '1px solid #fff' }}
          >
            Login
          </button>
          <button
            type="button"
            className={!login ? 'selected' : ''}
            onClick={handleRegisterClick}
          >
            Registrar
          </button>
        </SignButtons>
        {!login && name}
        {!login && email}
        <Field>
          <label htmlFor="username">Nome de usuário</label>
          <FontAwesomeIcon icon={faUser} size="lg" />
          <input type="text" name="username" placeholder="Nome do usuário" />
        </Field>
        <Field>
          <label htmlFor="password">Sua senha secreta</label>
          <FontAwesomeIcon icon={faLock} size="lg" />
          <input type="password" name="password" placeholder="Senha" />
        </Field>
        <Button type="submit" onClick={handleSubmit}>
          {login ? 'Entrar' : 'Cadastrar-se'}
        </Button>
      </Container>
    </>
  )
}
