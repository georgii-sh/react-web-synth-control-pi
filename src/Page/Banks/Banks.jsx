// @flow

import React from 'react'
import { connect } from 'react-redux'

import List from '../List/List'
import { loadBanks } from '../../redux'

type Props = {
  items: Array<any>,
  isLoading: boolean,
  loadBanks: Function
}

class Banks extends React.Component<Props> {

  componentWillMount() {
    this.props.loadBanks()
  }

  onItemClick(id: string) {
    console.log('ITEM CLICKED', id)
  }

  render() {
    return <List isLoading={this.props.isLoading} items={this.props.items} onItemClick={this.onItemClick} />
  }
}

const mapStateToProps = state => ({
  items: state.banksReducer.items,
  isLoading: state.banksReducer.isLoading
})

const mapDispatchToProps = dispatch => ({
  loadBanks() {
    dispatch(loadBanks())
  }
})

export const UnwrappedBanks = Banks

export default connect(mapStateToProps, mapDispatchToProps)(Banks)
