import React from 'react'
import ProductList from './ProductList'
import { connect } from 'react-redux'

const Listing = (props) => {
  return (
    <div>
      <h1 className="welcome">Random photos around the world</h1>
      <ProductList products={props.products}/>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    products: state.productReducer
  }
}

export default connect(mapStateToProps)(Listing)
