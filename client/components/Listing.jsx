import React from 'react'
import BeerList from './BeerList'
import { connect } from 'react-redux'

const Listing = (props) => {
  return (
    <div>
      <BeerList beers={props.beers}/>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    beers: state.beerReducer
  }
}

export default connect(mapStateToProps)(Listing)
