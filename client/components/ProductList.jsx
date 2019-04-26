import React from 'react'

import ProductListItem from './ProductListItem'
import { navigate, addToCart, fetchData } from '../actions/index'
import { connect } from 'react-redux'
import request from 'superagent'
import productReducer from '../reducers/productReducer'

class ProductList extends React.Component {
  state = {
    products: this.props.state
  }
  componentDidMount () {
    request
      .get('https://api.unsplash.com/photos/random/?client_id=9246c1c6029872e3c5ab6d3d689face627caa741e633c82c7d59ddaad33d70bc')
      // .then(console.log)
      .then(res => {
        console.log(res.body)
        this.setState({
          products: res.body.urls.small,
          id: res.body.id
        })
      })
  }

  render () {
    return (
      <div>
          <img src={this.state.products}></img>
        <button onClick={() => this.props.fetchData()}>Random Photo</button>
        <button><a href='#'
        className='cart-link'
        onClick={() => this.props.addToCart(this.state.id)}>Add to Board</a></button>

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    state: state.productReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id))
      dispatch(navigate('cart'))
    },
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(mapStateToProps,
  mapDispatchToProps
)(ProductList)
