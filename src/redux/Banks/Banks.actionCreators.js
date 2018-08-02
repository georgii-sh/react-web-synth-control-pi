// @flow

import axios from 'axios'

export default function loadBanks() {
  const apiUrl = process.env.API_URL || ''
  return (dispatch: Function) => {
    dispatch({ type: 'BANKS_LOADING' })
    axios
      .get(`${apiUrl}banks`)
      .then(response => dispatch({
          type: 'BANKS_ITEMS_LOADED',
          payload: { items: response.data.items }
      }))
      .catch(err => dispatch({
        type: 'BANKS_SET_ERROR',
        payload: { error: err.message }
      }))
  }
}

