import React from 'react'
import { createGlobalStyle } from 'styled-components'

import Routes from './routes'
import Navbar from './components/Navbar'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
  }
  body, html {
    background: #eed;
    font-family: 'Roboto', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    height: 100%;
    width: 100%;
`

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
      <GlobalStyle />
    </div>
  )
}

export default App
