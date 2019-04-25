import { combineReducers } from 'redux'
import productReducer from './productReducer'
import cartReducer from './cartReducer'
import navigateReducer from './navigateReducer'
// import otherReducer from './other-reducer'

export default combineReducers({
  productReducer,
  cartReducer,
  navigateReducer
})
