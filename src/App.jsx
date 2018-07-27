// @flow

import React from 'react'
import { withRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Page from './Page/Page'

const PageWithRouter = withRouter(props => <Page {...props} />)

const App = () => (
  <Provider store={store}>
    <PageWithRouter />
  </Provider>
)

export default App
