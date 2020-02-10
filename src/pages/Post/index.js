import React, { Component } from 'react'

import {
  Container,
  ContainerPost,
  Image,
  Title,
  PostMeta,
  Description
} from './styles'

import Thumb from '../../assets/img/post.png'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

export default class Post extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Header />
        <Container>
          <ContainerPost>
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
              minus ipsum aspernatur facere blanditiis tenetur quas vitae
              ducimus cupiditate iure, necessitatibus nam, molestiae in
              repudiandae nisi quod aliquid est error! Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Quos, minus ipsum aspernatur
              facere blanditiis tenetur quas vitae ducimus cupiditate iure,
              necessitatibus nam, molestiae in repudiandae nisi quod aliquid est
              error! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quos, minus ipsum aspernatur facere blanditiis tenetur quas vitae
              ducimus cupiditate iure, necessitatibus nam, molestiae in
              repudiandae nisi quod aliquid est error! repudiandae nisi quod
              aliquid est error! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Quos, minus ipsum aspernatur facere blanditiis
              tenetur quas vitae ducimus cupiditate iure, necessitatibus nam,
              molestiae in repudiandae nisi quod aliquid est error! Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Quos, minus ipsum
              aspernatur facere blanditiis tenetur quas vitae ducimus cupiditate
              iure, necessitatibus nam, molestiae in repudiandae nisi quod
              aliquid est error!
            </Description>
          </ContainerPost>
          <Sidebar />
        </Container>
      </>
    )
  }
}
