// @flow
import React from 'react'

import styles from './NotFound.scss'
import { bs4 } from './shared/bs4'

export default class NotFound extends React.Component<any> {
  render() {
    return (
      <div className={[styles.container, bs4['col-12']].join(' ')}>
        <h1 className={[styles.text].join(' ')}>
          <span className={[bs4.glyphicon, bs4['glyphicon-asterisk']].join(' ')} /> 404 page not
          found
        </h1>
      </div>
    )
  }
}
