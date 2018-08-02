// @flow

import React from 'react'
import { connect } from 'react-redux'

import List from '../List/List'
import { loadBanks } from '../../redux'

type Props = {
  history: any,
  items: Array<any>,
  isLoading: boolean,
  loadBanks: Function
}

class Banks extends React.Component<Props> {

  constructor(props) {
    super(props)
    this.onItemClick = this.onItemClick.bind(this)
  }

  componentWillMount() {
    this.props.loadBanks()
  }

  onItemClick(id: string) {
    this.props.history.push(`/instruments/${id}`)
  }

  render() {
    return (
      <div>
        <h1>Banks</h1>
        <List isLoading={this.props.isLoading} items={this.props.items} onItemClick={this.onItemClick} />
      </div>
    )
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
