import React, { Component } from 'react'
import CartList from './CartList'
import { connect } from 'react-redux'
import { navigate } from '../actions/index'

class Cart extends Component {
  render () {
    return (
      <div>
        <p className="welcome">Thirsty? Sweet! You are one step closer to a quenching.</p>
        <CartList cart ={this.props.cart}/>
        <a href='#'
          onClick={(e) => {
            e.preventDefault()
            this.props.keepShopping()
          }}>Keep Shopping</a>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    cart: state.cartReducer
  }
}
function mapStateToDispatch (dispatch) {
  return {
    keepShopping: () => dispatch(navigate('listing'))
  }
}
export default connect(mapStateToProps, mapStateToDispatch)(Cart)
