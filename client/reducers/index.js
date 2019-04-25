import { combineReducers } from 'redux'
<<<<<<< HEAD

import page from './page'
import beers from './beers'
import cart from './cart'

export default combineReducers({
  page,
  beers,
  cart
=======
import beerReducer from './beerReducer'
import cartReducer from './cartReducer'
import navigateReducer from './navigateReducer'
// import otherReducer from './other-reducer'

export default combineReducers({
  beerReducer,
  cartReducer,
  navigateReducer
>>>>>>> dcdf516ae55cd27cd8b7277a7fd3a0dce1e2e20e
})

