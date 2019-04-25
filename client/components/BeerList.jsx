import React from 'react'
<<<<<<< HEAD
import { connect } from 'react-redux'

import { addToCart, navigate } from '../actions'

import BeerListItem from './BeerListItem'

const BeerList = (props) => {
  return (
    <div className='beerlist'>
      <p className='welcome'>
    Welcome! Please select from our delicious selection and dont hesitate to let us know if we can answer any of your questions.
      </p>
      {props.beersmap(beer => {
        return (
          <BeerListItem key={beer.id} beer={beer} addToCart={props.addToCart} />
        )
      })}
=======

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
>>>>>>> dcdf516ae55cd27cd8b7277a7fd3a0dce1e2e20e
    </div>
  )
}

<<<<<<< HEAD
const mapStateToProps = (state) => {
  return {
    beers: state.beers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  (id) => {
    dispatch(addToCart(id))
    dispatch(navigate('cart'))
  }
 }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerList)
=======
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
>>>>>>> dcdf516ae55cd27cd8b7277a7fd3a0dce1e2e20e
