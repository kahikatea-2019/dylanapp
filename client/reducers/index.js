import { combineReducers } from 'redux'
import productReducer from './productReducer'
import boardReducer from './boardReducer'
import navigateReducer from './navigateReducer'
// import otherReducer from './other-reducer'

export default combineReducers({
  productReducer,
  boardReducer,
  navigateReducer
})
