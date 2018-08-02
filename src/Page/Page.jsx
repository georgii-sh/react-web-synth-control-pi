// @flow

import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import { bs4 } from '../shared'
import styles from './Page.scss'

import Header from './Header/Header'
import Banks from './Banks/Banks'

type Props = {
  history: any
}

class Page extends React.Component<Props> {
  render() {
    return (
      <div>
        <Header title="Zynaddsubfx" />
        <div className={[bs4.container, styles.app__container].join(' ')}>
          <Fragment>
            <Route path="/banks" component={() => <Banks history={this.props.history}/>} />
          </Fragment>
        </div>
      </div>
    )
  }
}

export default Page
