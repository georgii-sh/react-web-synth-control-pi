// @flow

import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { bs4 } from '../shared'
import styles from './Page.scss'

import Header from './Header/Header'
import Banks from './Banks/Banks'
import Instruments from './Instruments/Instruments'

type Props = {
  match: Match,
  history: RouterHistory,
}

class Page extends React.Component<Props> {
  render() {
    return (
      <div>
        <Header title="Zynaddsubfx" />
        <div className={[bs4.container, styles.app__container].join(' ')}>
          <Route path="/" exact component={() => <Redirect to="/instruments" />} />
          <Fragment>
            <Route path="/instruments" exact component={props => <Banks {...props}/>} />
            <Route path="/instruments/:bank" exact component={props => <Instruments {...props}/>} />
          </Fragment>
        </div>
      </div>
    )
  }
}

export default Page
