const initialCartState = []

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case 'ADD_CART':
      return {
        carts: [
          ...state.carts,
          action.cart
        ]
      }

    case 'DELETE_CART':
      return {
        carts: state.carts.filter(cart =>
          cart !== action.cart
        )
      }

    case 'UPDATE_CART':
      return {
        carts: state.carts.map(cart =>
          cart === action.cart
            ? action.change
            : cart
        )
      }

    default:
      return state
  }
}

export default cartReducer
