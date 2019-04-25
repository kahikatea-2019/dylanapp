import React from 'react'

import ProductListItem from './ProductListItem'
import { navigate, addToCart } from '../actions/index'
import { connect } from 'react-redux'

const ProductList = (props) => {
  return (
    <div>
      <ul>
        {props.products.map(product =>
          <ProductListItem key={product.id} product={product} addToCart={props.addToCart}/>

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
)(ProductList)
