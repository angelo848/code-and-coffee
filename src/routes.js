import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/Main'
import Login from './pages/Login'
import Post from './pages/Post'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/post" component={Post} />
    </Switch>
  </BrowserRouter>
)

export default Routes
