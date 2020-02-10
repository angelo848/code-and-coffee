import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import { Container } from './style'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import ListPosts from '../../components/ListPosts'
import Sidebar from '../../components/Sidebar'

export default function Main() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function loadPosts() {
      const response = await api.get('/posts')

      setPosts(response.data)
    }

    loadPosts()
  }, [posts])

  return (
    <>
      <Navbar />
      <Header />
      <Container>
        <ListPosts data={posts} />
        <Sidebar />
      </Container>
    </>
  )
}
