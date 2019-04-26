import React from 'react'

const ProductListItem = (props) => {
  const { name, make, url, id } = props.product
  return (
    <div className="beer">
      <p className="name">{name}</p>
      <p className="description">{make}</p>
      <p><img src={url}/></p>
      <a href='#'
        className='cart-link'
        onClick={() => props.addToCart(id, name)}>Add to cart</a>
    </div>

  )
}
export default ProductListItem
