import request from 'superagent'
// ability to navigate between the listing and the cart

export const navigate = target => {
  return {
    type: 'NAVIGATE',
    target // 'listing' or 'cart'
  }
}
// Add to cart
// todo: can we remove name?  Or, fix dispatch in BeerList..
export const addToCart = (id, name) => {
  return {
    type: 'ADD_TO_CART',
    id,
    name
  }
}
// Delete from cart
export const removeFromCart = id => {
  return {
    type: 'REMOVE_FROM_CART',
    id
  }
}
// Update the cart
export const updateQuantities = cart => {
  return {
    type: 'UPDATE_QUANTITIES',
    cart
  }
}

export const requestData = (posts) => {
  return {
    type: 'FETCH_DATA',
    posts
  }
}

export function fetchData () {
  return (dispatch) => {
    return request
      .get('https://api.unsplash.com/photos/random/?client_id=9246c1c6029872e3c5ab6d3d689face627caa741e633c82c7d59ddaad33d70bc')
      .then(res => {
        dispatch(requestData(res.body))
      })
  }
}
