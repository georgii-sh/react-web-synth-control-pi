// git co d8fc9c732cb2c96975c27895d561ff187652dfa6

// @flow

import React from 'react'
import { connect } from 'react-redux'

import { bs4 } from '../shared'
import styles from './Page.scss'

type Props = {
  title: string
}

class Page extends React.Component<Props> {
  render() {
    return (
      <div className={[bs4.container, styles.app__container].join(' ')}>
        hello {this.props.title}
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({

})

export const UnwrappedPage = Page

export default connect(mapStateToProps, mapDispatchToProps)(Page)
