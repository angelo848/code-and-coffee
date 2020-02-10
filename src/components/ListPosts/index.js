import React, { Component } from 'react'

import { List } from './styles'
import Post from '../Post'

export default class ListPosts extends Component {
  render() {
    return (
      <List>
        <Post />
        <Post />
      </List>
    )
  }
}
