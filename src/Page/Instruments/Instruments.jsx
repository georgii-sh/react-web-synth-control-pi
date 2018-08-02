// @flow

import React from 'react'
import { connect } from 'react-redux'

import List from '../List/List'
import { loadInstruments } from '../../redux'

type Props = {
  match: Match,
  history: RouterHistory,
  items: Array<any>,
  isLoading: boolean,
  loadInstruments: Function
}

class Instruments extends React.Component<Props> {

  constructor(props) {
    super(props)
    this.onItemClick = this.onItemClick.bind(this)
  }

  componentWillMount() {
    const { bank } = this.props.match.params
    this.props.loadInstruments(bank)
  }

  onItemClick(id: string) {
    
  }

  render() {
    const { bank } = this.props.match.params
    return (
      <div>
        <h1>{bank}</h1>
        <List isLoading={this.props.isLoading} items={this.props.items} onItemClick={this.onItemClick} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.instrumentsReducer.items,
  isLoading: state.instrumentsReducer.isLoading
})

const mapDispatchToProps = dispatch => ({
  loadInstruments(bank: string) {
    dispatch(loadInstruments(bank))
  }
})

export const UnwrappedInstruments = Instruments

export default connect(mapStateToProps, mapDispatchToProps)(Instruments)
