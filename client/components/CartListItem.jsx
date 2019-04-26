import React from 'react'

const CartListItem = (props) => {
  const { name, id } = props.beer
  return (
    <>
    <tr>
      <td>{name}</td>

      <td><button
        onClick={() => props.delete(id)}>Delete
      </button></td>
    </tr>
    </>
  )
}
export default CartListItem
