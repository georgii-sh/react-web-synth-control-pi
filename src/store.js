import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './redux/index.reducers'

const middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger)
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f
  )
)

export default store
