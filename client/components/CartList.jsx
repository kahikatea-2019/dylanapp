import React from 'react'
import CartListItem from './CartListItem'
import { connect } from 'react-redux'

const CartList = (props) => {
  return (
    <div>
      <ul>
        {props.cart.map(beer =>
          <CartListItem />

        )}
      </ul>
    </div>
  )
}
export default CartList
