// git co d8fc9c732cb2c96975c27895d561ff187652dfa6

// @flow

import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import { bs4 } from '../shared'
import styles from './Page.scss'

import Banks from './Banks/Banks'

type Props = {
}

class Page extends React.Component<Props> {
  render() {
    return (
      <div className={[bs4.container, styles.app__container].join(' ')}>
        <Fragment>
          <Route path="/banks" component={() => <Banks />} />
        </Fragment>
      </div>
    )
  }
}

export default Page
