const productReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return action.posts
    default:
      return state
  }
}
export default productReducer
