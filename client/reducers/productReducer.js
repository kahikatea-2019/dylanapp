// import productData from '../../data/products'
// const initialProductState = productData.products

const productReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return action
    default:
      return state
  }
}
export default productReducer
