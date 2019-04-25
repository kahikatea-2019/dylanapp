import productData from '../../data/products'
const initialProductState = productData.products

const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
export default productReducer
