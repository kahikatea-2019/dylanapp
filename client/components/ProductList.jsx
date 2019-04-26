import React from 'react'

import ProductListItem from './ProductListItem'
import { navigate, addToCart, fetchData } from '../actions/index'
import { connect } from 'react-redux'
import request from 'superagent'
import productReducer from '../reducers/productReducer'

class ProductList extends React.Component {
  state={
    products: productReducer
  }
  componentDidMount () {
    request
      .get('https://api.unsplash.com/photos/random/?client_id=9246c1c6029872e3c5ab6d3d689face627caa741e633c82c7d59ddaad33d70bc')
      // .then(console.log)
      .then(res => {
        console.log(res.body)
        const { raw } = res.body.urls
        this.setState({
          products: raw
        })
      })
  }

  render () {
    return (
      <div>
        <ul>
          {/* {this.props.products.map(product =>
            <ProductListItem key={product.id} product={product} addToCart={this.props.addToCart}/>
          )} */}
          <img src={this.state.products}></img>
        </ul>
        <button onClick={() => this.props.fetchData()}>Random Photo</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, name) => {
      dispatch(addToCart(id, name))
      dispatch(navigate('cart'))
    },
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(null,
  mapDispatchToProps
)(ProductList)
