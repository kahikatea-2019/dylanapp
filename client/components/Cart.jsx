import React, { Component } from 'react'
import CartList from './CartList'
import { connect } from 'react-redux'

class Cart extends Component {
  render () {
    return (
      <div>
        <p className="welcome">Thirsty? Sweet! You are one step closer to a quenching.</p>
        <CartList cart ={this.props.cart}/>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    cart: state.cartReducer
  }
}
export default connect(mapStateToProps)(Cart)
