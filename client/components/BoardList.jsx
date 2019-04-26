import React from 'react'
import BoardListItem from './BoardListItem'
import { addToBoard, updateQuantities, navigate } from '../actions/index'
import { connect } from 'react-redux'


class BoardList extends React.Component {
  state ={
    board: this.props.board
  }
  changeHandler = (id, quantity) => {
    const { board } = this.state
    this.setState({
      board: board.map(photo => {
        if (photo.id === id) photo.quantity = Number(quantity)
        return photo
      })
    })
  }
  render () {
    return (
      <div>
        <div className='cart'>
              {this.props.board.map((photo, id) =>
                <BoardListItem
                  key ={id}
                  photo={photo}/>
              )}
          <p className="actions">
            <a href='#'
              onClick={(e) => {
                e.preventDefault()
                this.props.keepShopping()
              }}>Back To Photos</a>
            <button className="button-primary">Save Board</button>
          </p>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    board: state.boardReducer
  }
}
function mapStateToDispatch (dispatch) {
  return {
    keepShopping: () => dispatch(navigate('listing')),
    addToBoard: (id) => dispatch(board(id)),
    updateQuantities: (board) => dispatch(updateQuantities(board))
  }
}
export default connect(mapStateToProps, mapStateToDispatch)(BoardList)
