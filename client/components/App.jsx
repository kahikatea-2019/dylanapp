import React from 'react'

import Header from './Header'
import Listing from './Listing'
import Board from './Board'

import { connect } from 'react-redux'

// This might need to be turned into a stateful (class-based) component
const App = (props) => (
  <div className='app'>
    <Header/>
    {props.navigate === 'listing' ? <Listing /> : <Board />}

  </div>
)

const mapStateToProps = (state) => {
  return {
    navigate: state.navigateReducer
  }
}

export default connect(mapStateToProps)(App)
