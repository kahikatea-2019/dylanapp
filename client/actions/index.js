import request from 'superagent'
// ability to navigate between the listing and the cart

export const navigate = target => {
  return {
    type: 'NAVIGATE',
    target //
  }
}
// Add to cart
// todo: can we remove name?  Or, fix dispatch in BeerList..
export const addToBoard = (id, name) => {
  return {
    type: 'ADD_TO_BOARD',
    id,
    name
  }
}
// Delete from cart
export const removeFromBoard = id => {
  return {
    type: 'REMOVE_FROM_BOARD',
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
      .get('https://api.unsplash.com/photos/random/?client_id=')
      .then(res => {
        dispatch(requestData(res.body))
      })
  }
}
