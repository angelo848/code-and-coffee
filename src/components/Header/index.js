import React from 'react'

import { Container, Description } from './style'

const Header = () => (
  <Container>
    <Description>
      <a href="/" className="title">
        Blog Code 'n Coffee
      </a>
      <p className="text">Pegue um café e vamos codar</p>
    </Description>
  </Container>
)

export default Header
