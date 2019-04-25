import React from 'react'
import CartListItem from './CartListItem'
import { removeFromCart, updateQuantities, navigate } from '../actions/index'
import { connect } from 'react-redux'


class CartList extends React.Component {
  state={
    cart: this.props.cart
  }
  changeHandler = (id, quantity) => {
    const { cart } = this.state
    this.setState({
      cart: cart.map(beer => {
        if (beer.id === id) beer.quantity = Number(quantity)
        return beer
      })
    })
  }
  render () {
    return (
      <div>
        <div className='cart'>
          <table>
            <thead>
              <tr>
                <th>Beer</th>
                <th>Quantity</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {this.props.cart.map((beer, id) =>
                <CartListItem
                  key ={id}
                  beer={beer}
                  delete={this.props.removeFromCart}
                  update={this.changeHandler}/>
              )}
            </tbody>
          </table>

          <p className="actions">
            <a href='#'
              onClick={(e) => {
                e.preventDefault()
                this.props.keepShopping()
              }}>Keep Shopping</a>
            <button onClick={()=> this.props.updateQuantities(this.state.cart)}>Update</button>
            <button className="button-primary">Checkout</button>
          </p>
        </div>
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
    keepShopping: () => dispatch(navigate('listing')),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    updateQuantities: (cart) => dispatch(updateQuantities(cart))
  }
}
export default connect(mapStateToProps, mapStateToDispatch)(CartList)
