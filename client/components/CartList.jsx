import React from 'react'
import CartListItem from './CartListItem'
import { removeFromCart, updateQuantities, navigate } from '../actions/index'
import { connect } from 'react-redux'


class CartList extends React.Component {
  state ={
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
              {this.props.cart.map((beer, id) =>
                <CartListItem
                  key ={id}
                  beer={beer}/>
              )}
          <p className="actions">
            <a href='#'
              onClick={(e) => {
                e.preventDefault()
                this.props.keepShopping()
              }}>Back To Photos</a>
            <button className="button-primary">Save Board</button>
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
