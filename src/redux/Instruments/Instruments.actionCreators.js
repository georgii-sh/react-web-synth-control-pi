// @flow

import axios from 'axios'

export default function loadInstruments(bank: string) {
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
