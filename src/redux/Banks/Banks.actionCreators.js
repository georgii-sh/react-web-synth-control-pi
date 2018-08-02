// @flow

import axios from 'axios'
import _ from 'lodash'

function formatItems(items) {
  return _.map(items, item => {
    return {
      id: item,
      title: item.replace(/[-_]/g, ' ')
    }
  })
}

export default function loadBanks() {
  const apiUrl = process.env.API_URL || ''
  return (dispatch: Function) => {
    dispatch({ type: 'BANKS_LOADING' })
    axios
      .get(`${apiUrl}banks`)
      .then(response => {
        const items = formatItems(response.data.items)
        dispatch({
          type: 'BANKS_ITEMS_LOADED',
          payload: { items }
        })
      })
      .catch(err => dispatch({
        type: 'BANKS_SET_ERROR',
        payload: { error: err.message }
      }))
  }
}

