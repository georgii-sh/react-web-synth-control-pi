// @flow

type State = {
  items: Array<any>,
  isLoading: boolean
}

type Action = {
  type: string,
  payload: State
}

const DEFAULT_STATE = {
  items: [],
  isLoading: false
}

export default (state: State = DEFAULT_STATE, action: Action) => {
  switch (action.type) {
    case 'BANKS_LOADING':
      return Object.assign({}, state, { isLoading: true })
    case 'BANKS_ITEMS_LOADED':
      return Object.assign({}, state, { items: action.payload.items, isLoading: false })
    default:
      return state
  }
}
