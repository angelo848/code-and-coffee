import React, { Component } from 'react'

import Header from '../../components/Header'
import Post from '../../components/Post'
import { Container } from './style'

export default class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <Container>
          <Post />
        </Container>
      </>
    )
  }
}
