// @flow

import React from 'react'

import styles from './Star.scss'
import data from './data'

type Props = {
  isSelected?: boolean
}

class Star extends React.PureComponent<Props> {
  render() {
    return this.props.isSelected 
     ? <img className={styles.star} src={data.selected} alt="remove from favorites" /> 
     : <img className={styles.star} src={data.empty} alt="add to favorites"/>
  }
}

export default Star
