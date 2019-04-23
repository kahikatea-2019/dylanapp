import React from 'react'

const BeerListItem = (props) => {
  const { name, brewery, country, style, abv } = props.beer
  return (
    <div className="beer">
      <p className="name">{name}</p>
      <p className="description">A{style}from{brewery}</p>
      <p>
        <span className="country">{country}</span>
        <span className="abv">{abv}</span>
        <a href="/designs/cart.html" className="cart-link">Add to cart</a>
      </p>
    </div>

  )
}
export default BeerListItem
