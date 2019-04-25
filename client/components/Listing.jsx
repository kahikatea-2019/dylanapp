import React from 'react'
import BeerList from './BeerList'
import { connect } from 'react-redux'

const Listing = (props) => {
  return (
    <div>
      <p className="welcome">Welcome! Please select from our delicious selection and do not hesitate to let us know if we can answer any of your questions.</p>
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
