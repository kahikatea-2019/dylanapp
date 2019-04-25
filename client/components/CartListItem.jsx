import React from 'react'

const CartListItem = (props) => {
  const { name, id, quantity } = props.beer
  return (
    <>
    <tr>
      <td>{name}</td>
      <td><input id ={id} defaultValue={quantity}
        onChange ={() => props.update(id, quantity)}
        type='number'></input></td>
      <td><button
        onClick={() => props.delete(id)}>Delete
      </button></td>
    </tr>
    </>
  )
}
export default CartListItem
