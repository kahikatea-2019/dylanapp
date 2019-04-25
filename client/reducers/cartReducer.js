const initialCartState = []

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        {

          id: action.id,
          name: action.name,
          quantity: 1

        }]
    case 'REMOVE_FROM_CART':
      return state.filter(cart =>
        cart.id !== action.id
      )

    case 'UPDATE_QUANTITIES':
      return action.cart

    default:
      return state
  }
}

export default cartReducer