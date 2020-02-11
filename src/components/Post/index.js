import React from 'react'

import {
  Container,
  Image,
  Title,
  PostMeta,
  Description,
  Button
} from './styles'

const Post = props => (
  <Container>
    <a href="/post">
      <Image src={props.thumb}></Image>
    </a>
    <Title href="/post">{props.title}</Title>
    <PostMeta>
      <span className="post-data">08 de Janeiro de 2020</span>
      <span className="separator">/</span>
      <span className="post-data">Ângelo Salles</span>
      <span className="separator">/</span>
      <span className="post-data">0 Comments</span>
    </PostMeta>
    <Description>{props.content}</Description>
    <Button href="/post">Continuar lendo</Button>
  </Container>
)

export default Post
