import React, { Component } from 'react'

import { Container } from './style'
import Header from '../../components/Header'
import ListPosts from '../../components/ListPosts'
import Sidebar from '../../components/Sidebar'

export default class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <Container>
          <ListPosts />
          <Sidebar />
        </Container>
      </>
    )
  }
}
