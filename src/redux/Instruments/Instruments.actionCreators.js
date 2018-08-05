// @flow

import axios from 'axios'

export function loadInstruments(bank: string) {
  const apiUrl = process.env.API_URL || ''
  return (dispatch: Function) => {
    dispatch({ type: 'INSTRUMENTS_LOADING' })
    axios
      .get(`${apiUrl}instruments/${bank}`)
      .then(response => dispatch({
          type: 'INSTRUMENTS_ITEMS_LOADED',
          payload: {
            items: response.data.items
          }
      }))
      .catch(err => dispatch({
        type: 'INSTRUMENTS_SET_ERROR',
        payload: {
          error: err.message
        }
      }))
  }
}

export function selectInstrument(bank: string, instrument: string) {
  const apiUrl = process.env.API_URL || ''
  return (dispatch: Function) => {
    dispatch({ type: 'SELECT_INSTRUMENT_LOADING' })
    axios
      .post(`${apiUrl}instruments/${bank}`, { instrument })
      .then(response => dispatch({
        type: 'SELECT_INSTRUMENT_FINISH',
        payload: {
          instrument: response.data.instrument
        }
      }))
      .catch(err => dispatch({
        type: 'SELECT_INSTRUMENT_SET_ERROR',
        payload: {
          error: err.message
        }
      }))
  }
}
