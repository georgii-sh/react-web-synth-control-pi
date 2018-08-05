// @flow

type State = {
  items: Array<any>,
  isLoading: boolean,
  instrument: string
}

type Action = {
  type: string,
  payload: State
}

const DEFAULT_STATE = {
  items: [],
  isLoading: false,
  instrument: ''
}

export default (state: State = DEFAULT_STATE, action: Action) => {
  switch (action.type) {
    case 'INSTRUMENTS_LOADING':
      return Object.assign({}, state, { isLoading: true })
    case 'INSTRUMENTS_ITEMS_LOADED':
      return Object.assign({}, state, { items: action.payload.items, isLoading: false })
    case 'SELECT_INSTRUMENT_FINISH':
      return Object.assign({}, state, { instrument: action.payload.instrument })
    default:
      return state
  }
}
