import React from 'react'

const BoardListItem = (props) => {
  const { name, id } = props.photo
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
export default BoardListItem
