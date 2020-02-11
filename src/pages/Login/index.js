import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserCircle,
  faEnvelope,
  faUser,
  faLock
} from '@fortawesome/free-solid-svg-icons'

import Navbar from '../../components/Navbar'
import api from '../../services/api'
import { login } from '../../services/auth'

import { Form, Title, SignButtons, Field, Button } from './styles'

export default function Login(props) {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [sign, setSign] = useState(true)

  let Name = (
    <Field>
      <label htmlFor="name">Seu nome completo</label>
      <FontAwesomeIcon icon={faUserCircle} size="lg" />
      <input
        type="text"
        name="name"
        placeholder="Seu nome"
        onChange={e => setName(e.target.value)}
      />
    </Field>
  )

  let Email = (
    <Field>
      <label htmlFor="email">Seu melhor email</label>
      <FontAwesomeIcon icon={faEnvelope} size="lg" />
      <input
        type="text"
        name="email"
        placeholder="E-mail completo"
        onChange={e => setEmail(e.target.value)}
      />
    </Field>
  )

  function handleLoginClick() {
    setSign(true)
  }

  function handleRegisterClick() {
    setSign(false)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (login) {
      if (!username || !password) {
        alert('Preencha email e/ou senha para continuar!')
      } else {
        try {
          const response = await api.get('/authenticate', {
            auth: {
              username: username,
              password: password
            }
          })
          login(response.data.token)
          props.history.push('/')
        } catch (error) {
          console.log(error)
          alert('Houve um problema com o login, verifique suas credenciais')
        }
      }
    } else {
      console.log('Cadastrou')
    }
  }

  return (
    <>
      <Navbar />
      {sign ? <Title>Entrar</Title> : <Title>Cadastrar</Title>}
      <Form onSubmit={handleSubmit}>
        <SignButtons>
          <button
            type="button"
            className={sign ? 'selected' : ''}
            onClick={handleLoginClick}
            style={{ borderRight: '1px solid #fff' }}
          >
            Entrar
          </button>
          <button
            type="button"
            className={!sign ? 'selected' : ''}
            onClick={handleRegisterClick}
          >
            Cadastrar
          </button>
        </SignButtons>
        {!sign && Name}
        {!sign && Email}
        <Field>
          <label htmlFor="username">Nome de usuário</label>
          <FontAwesomeIcon icon={faUser} size="lg" />
          <input
            type="text"
            name="username"
            placeholder="Nome do usuário"
            onChange={e => setUsername(e.target.value)}
          />
        </Field>
        <Field>
          <label htmlFor="password">Sua senha secreta</label>
          <FontAwesomeIcon icon={faLock} size="lg" />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            onChange={e => setPassword(e.target.value)}
          />
        </Field>
        <Button type="submit" onClick={handleSubmit}>
          {login ? 'Entrar' : 'Cadastrar-se'}
        </Button>
      </Form>
    </>
  )
}
