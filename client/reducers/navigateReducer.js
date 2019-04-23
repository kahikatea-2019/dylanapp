const navigateReducer = (state = true, action) => {
  switch (action.type) {
    case 'NAVIGATE':
      return action.target
    default:
      return state
  }
}
export default navigateReducer
