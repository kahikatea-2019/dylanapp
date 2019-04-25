<<<<<<< HEAD
export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_FROM_CART ='DELETE_FROM_CART'
export const UPDATE_CART ='UPDATE_CART'
export const NAVIGATE = 'NAVIGATE'

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id
  }
}

export const deleteFromCart = (id) => {
  return {
    type: DELETE_FROM_CART,
    id
  }
}

export const updateCart = (cart) => {
  return {
    type: UPDATE_CART,
    cart
  }
}

export const navigate = (destination) => {
  return {
    type: NAVIGATE,
    destination
=======
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
>>>>>>> dcdf516ae55cd27cd8b7277a7fd3a0dce1e2e20e
  }
}
