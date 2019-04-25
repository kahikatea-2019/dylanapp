<<<<<<< HEAD
import React from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import {
  navigate,
  deleteFromCart,
  updateCart } from '../actions'

class Cart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cart: props.cart
    }
  }

  update = (id, quantity) => {
    this.setState({
      cart: this.state.cart.map(item => {
        if (item.id === id) item.quantity = Number(quantity)
        return item
      })
    })
  }

  deleteItem = (id) => {
    const cart = this.state.cart.filter(item => item.id !== id)
    this.setState({ cart })
    this.props.deleteFromCart(id)
  }

  render () {
    return (
      <div className='cart'>
        <table>
          <thead>
            <tr>
              <td>Beer</td>
              <td>Quantity</td>
              <td>Remove</td>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((item, id) => {
              return (
                <CartItem key={id}
                  item={item}
                  update={this.update}
                  deleteFromCart={this.deleteItem}
                />
              )
            })}
          </tbody>
        </table>

        <p className='actions'>
          <a href='#' onClick={this.props.keepShopping}>Continue shopping</a>
          <button onClick={() => this.props.updateCart(this.state.cart)}>Update</button>
          <button className='button-primary'>Checkout</button>
        </p>
=======
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
>>>>>>> dcdf516ae55cd27cd8b7277a7fd3a0dce1e2e20e
      </div>
    )
  }
}
<<<<<<< HEAD

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    keepShopping: () => dispatch(navigate('listing')),
    deleteFromCart: (id) => dispatch(deleteFromCart(id)),
    updateCart: (cart) => dispatch(updateCart(cart))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
=======
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
>>>>>>> dcdf516ae55cd27cd8b7277a7fd3a0dce1e2e20e
