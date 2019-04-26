import React from 'react'

const ProductListItem = (props) => {
  const { url } = props.product
  return (
    <div className="beer">
      <p><img src={url}/></p>
      <a href='#'
        className='cart-link'
        onClick={() => props.addToCart(id, name)}>Add to cart</a>
    </div>

  )
}
export default ProductListItem
