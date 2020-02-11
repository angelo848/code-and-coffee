import React from 'react'

import { List } from './styles'
import Post from '../Post'

export default function ListPosts({ data }) {
  return (
    <List>
      {data.map(post => (
        <Post
          key={post.id}
          title={post.title}
          thumb={post.thumb_url}
          content={post.content}
          category={post.category}
        />
      ))}
    </List>
  )
}
