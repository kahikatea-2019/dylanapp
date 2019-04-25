import React from 'react'

const ProductListItem = (props) => {
  const { name, brewery, country, style, abv, id } = props.product
  return (
    <div className="beer">
      <p className="name">{name}</p>
      <p className="description">A{style}from{brewery}</p>
      <p>
        <span className="country">{country}</span>
        <span className="abv">{abv}</span>
        <a href='#'
          className='cart-link'
          onClick={() => props.addToCart(id, name)}>Add to cart</a>
      </p>
    </div>

  )
}
export default ProductListItem
