// @flow

import React from 'react'
import { connect } from 'react-redux'

import List from '../List/List'
import { loadInstruments, selectInstrument } from '../../redux'

type Props = {
  match: Match,
  items: Array<any>,
  selectedInstrument: string,
  isLoading: boolean,
  loadInstruments: Function,
  selectInstrument: Function
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

  onItemClick(instrument: string) {
    const { bank } = this.props.match.params
    this.props.selectInstrument(bank, instrument)
  }

  render() {
    const { bank } = this.props.match.params
    return (
      <div>
        <h1>{bank}</h1>
        <List 
          isLoading={this.props.isLoading} 
          items={this.props.items} 
          onItemClick={this.onItemClick} 
          selectedId={this.props.selectedInstrument} 
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.instrumentsReducer.items,
  isLoading: state.instrumentsReducer.isLoading,
  selectedInstrument: state.instrumentsReducer.instrument
})

const mapDispatchToProps = dispatch => ({
  loadInstruments(bank: string) {
    dispatch(loadInstruments(bank))
  },
  selectInstrument(bank: string, instrument: string) {
    dispatch(selectInstrument(bank, instrument))
  }
})

export const UnwrappedInstruments = Instruments

export default connect(mapStateToProps, mapDispatchToProps)(Instruments)
