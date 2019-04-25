import beersData from '../../data/beers'
const initialBeerState = beersData.beers

const beerReducer = (state = initialBeerState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
export default beerReducer
