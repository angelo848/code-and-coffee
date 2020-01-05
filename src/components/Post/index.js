import React from 'react'

import { Container, Image, Title, PostMeta, Description, Button } from './style'
import Thumb from '../../assets/img/post.png'

const Post = () => (
  <Container>
    <a href="/post">
      <Image src={Thumb}></Image>
    </a>
    <Title href="/post">Titulo do Post</Title>
    <PostMeta>
      <span className="post-data">08 de Janeiro de 2020</span>
      <span className="separator">/</span>
      <span className="post-data">Ângelo Salles</span>
      <span className="separator">/</span>
      <span className="post-data">0 Comments</span>
    </PostMeta>
    <Description>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, minus
      ipsum aspernatur facere blanditiis tenetur quas vitae ducimus cupiditate
      iure, necessitatibus nam, molestiae in repudiandae nisi quod aliquid est
      error! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
      minus ipsum aspernatur facere blanditiis tenetur quas vitae ducimus
      cupiditate iure, necessitatibus nam, molestiae in repudiandae nisi quod
      aliquid est error!
    </Description>
    <Button href="/post">Continuar lendo</Button>
  </Container>
)

export default Post
