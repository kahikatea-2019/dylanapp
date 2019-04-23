import React from 'react'
import Header from './Header'
import Listing from './Listing'

// This might need to be turned into a stateful (class-based) component
const App = () => (
  <div className='app'>
    <Header/>
    <Listing />
  </div>
)

export default App
