// @flow

import React from 'react'
import { connect } from 'react-redux'

import { bs4 } from '../../shared'
import styles from './List.scss'

type Props = {
  title: string
}

class List extends React.Component<Props> {
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

export const UnwrappedList = List

export default connect(mapStateToProps, mapDispatchToProps)(List)
