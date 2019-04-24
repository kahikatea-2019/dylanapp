import React from 'react'
import CartListItem from './CartListItem'
import { removeFromCart } from '../actions/index'
import { connect } from 'react-redux'

class CartList extends React.Component {
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
                  delete={this.props.removeFromCart}/>
              )}
            </tbody>
          </table>
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
    removeFromCart: (id) => dispatch(removeFromCart(id))
  }
}
export default connect(mapStateToProps, mapStateToDispatch)(CartList)
