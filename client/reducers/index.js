import { combineReducers } from 'redux'

import page from './page'
import beers from './beers'
import cart from './cart'

export default combineReducers({
  page,
  beers,
  cart
})

