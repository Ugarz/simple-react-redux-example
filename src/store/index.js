import { createStore, combineReducers } from 'redux'
import { settings } from './reducers'

// Combine in a single root reducer
const rootReducer = combineReducers({
  settings
})

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
