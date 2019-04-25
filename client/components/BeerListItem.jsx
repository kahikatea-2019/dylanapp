import React from 'react'

const BeerListItem = (props) => {
<<<<<<< HEAD
  const beer = props.beer
  return (
    <div className='beer'>
      <p className='name'>{beer.name}</p>
      <p className='description'>{beer.brewery}</p>
      <p>
        <span className='country'>{beer.country}</span>
        <span className='abv'>{beer.abv} abv</span>
        <a href='#'
          className='cart-link'
          onClick={() => props.addToCart(beer.id)}>Add To Cart</a>
      </p>
    </div>
  )
}

export defualt BeerListItem 
=======
  const { name, brewery, country, style, abv, id } = props.beer
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
export default BeerListItem
>>>>>>> dcdf516ae55cd27cd8b7277a7fd3a0dce1e2e20e
