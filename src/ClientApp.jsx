// @flow

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { hydrate } from 'react-dom'
import App from './App'
import NotFound from './NotFound'

const renderApp = () => {
  hydrate(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>,
    document.getElementById('root')
  )
}
renderApp()
