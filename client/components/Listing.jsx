import React from 'react'
import ProductList from './ProductList'
import { connect } from 'react-redux'

const Listing = (props) => {
  return (
    <div>
      <p className="welcome">Welcome! Please select from our delicious selection and do not hesitate to let us know if we can answer any of your questions.</p>
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
