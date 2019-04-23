import React from 'react'

import BeerListItem from './BeerListItem'
import { navigate, addToCart } from '../actions/index'
import { connect } from 'react-redux'

const BeerList = (props) => {
  return (
    <div>
      <ul>
        {props.beers.map(beer =>
          <BeerListItem key={beer.id} beer={beer} addToCart={props.addToCart}/>

        )}
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, name) => {
      dispatch(addToCart(id, name))
      dispatch(navigate('cart'))
    }
  }
}

export default connect(null,
  mapDispatchToProps
)(BeerList)
