import React from 'react'

const CartListItem = (props) => {
  return (
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
          <tr>
            <td>HBIB Ginger Fusion</td>
            <td><input className="update-input" value="3"/></td>
            <td><button><span className="fa fa-trash fa-2x"></span></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default CartListItem
