import React from 'react'
import BeerListItem from './BeerListItem'
import { connect } from 'react-redux'

const BeerList = (props) => {
  return (
    <div>
      <ul>
        {props.beers.map(beer =>
          <BeerListItem key={beer.id} beer={beer} />

        )}
      </ul>
    </div>
  )
}

export default connect()(BeerList)
