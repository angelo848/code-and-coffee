import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Description } from './styles'

export default function Header() {
  return (
    <Container>
      <Description>
        <Link to="/" className="title">
          Blog Code 'n Coffee
        </Link>
        <p className="text">Pegue um café e vamos codar</p>
      </Description>
    </Container>
  )
}
