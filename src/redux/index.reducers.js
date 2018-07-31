import { combineReducers } from 'redux'

import instrumentsReducer from './Instruments/Instruments.reducer'
import banksReducer from './Banks/Banks.reducer'

const rootReducer = combineReducers({
  instrumentsReducer,
  banksReducer
})

export default rootReducer
