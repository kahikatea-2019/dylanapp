import { combineReducers } from 'redux'
import beerReducer from './beerReducer'
import cartReducer from './cartReducer'
import navigateReducer from './navigateReducer'
// import otherReducer from './other-reducer'

export default combineReducers({
  beerReducer,
  cartReducer,
  navigateReducer
})

