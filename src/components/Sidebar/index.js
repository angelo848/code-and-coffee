import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faFolder,
  faFolderOpen,
  faEnvelopeOpen
} from '@fortawesome/free-solid-svg-icons'

import {
  Aside,
  SearchBar,
  About,
  Articles,
  Categories,
  Newsletter
} from './styles'

export default class Sidebar extends Component {
  render() {
    return (
      <Aside>
        <SearchBar>
          <input type="text" name="query" placeholder="Faça uma busca" />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </SearchBar>
        <About>
          <h3>Um blog para programadores</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            atque cumque, voluptas architecto, quia, nisi laudantium omnis quasi
            eligendi reiciendis delectus ea laborum? Eligendi dignissimos,
            aliquid quis voluptatum sequi eos.
          </p>
        </About>
        <Articles>
          <h4>Artigos Recentes</h4>
          <a href="/">Artigo 1</a>
          <a href="/">Artigo 2</a>
          <a href="/">Artigo 3</a>
        </Articles>
        <Categories>
          <h3>Categorias</h3>
          <a href="/">
            <FontAwesomeIcon icon={faFolder} className="contract" />
            <FontAwesomeIcon icon={faFolderOpen} className="expand" />
            <span>Front-end</span>
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faFolder} className="contract" />
            <FontAwesomeIcon icon={faFolderOpen} className="expand" />
            <span>Back-end</span>
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faFolder} className="contract" />
            <FontAwesomeIcon icon={faFolderOpen} className="expand" />
            <span>Mobile</span>
          </a>
        </Categories>
        <Newsletter>
          <h4>Assine nossa Newsletter</h4>
          <input type="email" name="email" placeholder="Seu melhor e-mail" />
          <button type="submit">
            Assinar <FontAwesomeIcon icon={faEnvelopeOpen}></FontAwesomeIcon>
          </button>
        </Newsletter>
      </Aside>
    )
  }
}
