import React from 'react'

const CartListItem = (props) => {
  return (
    <>
    <tr>
      <td>{props.beer.name}</td>
    </tr>
    </>
  )
}
export default CartListItem
