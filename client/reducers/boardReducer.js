const boardReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_BOARD':
      return [
        ...state,
        {

          id: action.id,
          name: action.name,
          quantity: 1

        }]
    case 'REMOVE_FROM_BOARD':
      return state.filter(board =>
        board.id !== action.id
      )

    case 'UPDATE_QUANTITIES':
      return action.board

    default:
      return state
  }
}

export default boardReducer
