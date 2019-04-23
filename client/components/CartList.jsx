import React from 'react'
import CartListItem from './CartListItem'
import { connect } from 'react-redux'

const CartList = (props) => {
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
            {props.cart.map((beer, id) =>
              <CartListItem
                key ={id}
                beer={beer}/>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CartList
