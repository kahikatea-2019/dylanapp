import React, { Component } from 'react'
import BoardList from './BoardList'
import { connect } from 'react-redux'

class Board extends Component {
  render () {
    return (
      <div>
        <p className="welcome"></p>
        <BoardList board ={this.props.board}/>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    board: state.boardReducer
  }
}

export default connect(mapStateToProps)(Board)
